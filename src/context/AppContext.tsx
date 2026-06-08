import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Service, Testimonial, DeveloperStats, DeveloperProfile, PROJECTS_DATA, SERVICES_DATA, TESTIMONIALS_DATA, DEVELOPER_STATS, DEVELOPER_PROFILE, PROCESS_STEPS } from '../types';
import { db, auth } from '../firebase';
import { collection, doc, onSnapshot, setDoc, deleteDoc, getDocs, updateDoc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { Language, TRANSLATIONS, defaultProfileTranslations, defaultServicesTranslations, defaultProjectsTranslations, defaultTestimonialTranslations, defaultProcessTranslationsByStep } from '../translations';

export interface ContactMessage {
  id: string;
  name: string;
  contactHandle: string;
  serviceType: string;
  company?: string;
  message: string;
  timestamp: string;
  status: 'new' | 'responded' | 'archived';
}

interface AppContextType {
  projects: Project[];
  services: Service[];
  testimonials: Testimonial[];
  stats: DeveloperStats;
  profile: DeveloperProfile;
  contactMessages: ContactMessage[];
  isAdminLoggedIn: boolean;
  currentUser: User | null;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof TRANSLATIONS['TJK']) => string;
  processSteps: typeof PROCESS_STEPS;
  
  // Projects actions
  addProject: (project: Omit<Project, 'id'>) => Promise<void>;
  updateProject: (project: Project) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  
  // Services actions
  addService: (service: Omit<Service, 'id'>) => Promise<void>;
  updateService: (service: Service) => Promise<void>;
  deleteService: (id: string) => Promise<void>;
  
  // Testimonials actions
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => Promise<void>;
  updateTestimonial: (testimonial: Testimonial) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;

  // Stats actions
  updateStats: (stats: DeveloperStats) => Promise<void>;

  // Profile actions
  updateProfile: (profile: DeveloperProfile) => Promise<void>;

  // Messages actions
  addContactMessage: (desc: Omit<ContactMessage, 'id' | 'timestamp' | 'status'>) => Promise<void>;
  updateMessageStatus: (id: string, status: 'new' | 'responded' | 'archived') => Promise<void>;
  deleteMessage: (id: string) => Promise<void>;

  // Auth actions
  loginAdmin: () => Promise<boolean>;
  logoutAdmin: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Helper for error reporting
enum OperationType {
  CREATE = 'create', UPDATE = 'update', DELETE = 'delete', LIST = 'list', GET = 'get', WRITE = 'write'
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language');
      if (stored === 'TJK' || stored === 'ENG' || stored === 'RUS') {
        return stored;
      }
    }
    return 'TJK';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: keyof typeof TRANSLATIONS['TJK']) => {
    const translationsForLang = TRANSLATIONS[language] || TRANSLATIONS['TJK'];
    return (translationsForLang as any)[key] || (TRANSLATIONS['TJK'] as any)[key] || key;
  };

  const [projects, setProjects] = useState<Project[]>(PROJECTS_DATA);
  const [services, setServices] = useState<Service[]>(SERVICES_DATA);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [stats, setStats] = useState<DeveloperStats>(DEVELOPER_STATS);
  const [profile, setProfile] = useState<DeveloperProfile>(DEVELOPER_PROFILE);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);

  // Localized profile mapping
  const localizedProfile = React.useMemo(() => {
    if (language === 'TJK') return profile;
    const defaultTranslations = defaultProfileTranslations[language] || defaultProfileTranslations['TJK'];
    return {
      ...profile,
      name: profile.name === DEVELOPER_PROFILE.name ? defaultTranslations.name : profile.name,
      role: profile.role === DEVELOPER_PROFILE.role ? defaultTranslations.role : profile.role,
      introTitle: profile.introTitle === DEVELOPER_PROFILE.introTitle ? defaultTranslations.introTitle : profile.introTitle,
      bio: profile.bio === DEVELOPER_PROFILE.bio ? defaultTranslations.bio : profile.bio,
      quote: profile.quote === DEVELOPER_PROFILE.quote ? defaultTranslations.quote : profile.quote,
    };
  }, [profile, language]);

  // Localized services mapping
  const localizedServices = React.useMemo(() => {
    if (language === 'TJK') return services;
    return services.map(service => {
      const translationMap = defaultServicesTranslations[language];
      if (translationMap && translationMap[service.id]) {
        return {
          ...service,
          title: translationMap[service.id].title,
          description: translationMap[service.id].description,
          benefits: translationMap[service.id].benefits,
        };
      }
      return service;
    });
  }, [services, language]);

  // Localized projects mapping
  const localizedProjects = React.useMemo(() => {
    if (language === 'TJK') return projects;
    return projects.map(proj => {
      const translationMap = defaultProjectsTranslations[language];
      if (translationMap && translationMap[proj.id]) {
        return {
          ...proj,
          title: translationMap[proj.id].title,
          category: translationMap[proj.id].category,
          description: translationMap[proj.id].description,
          longDescription: translationMap[proj.id].longDescription,
          features: translationMap[proj.id].features,
        };
      }
      return proj;
    });
  }, [projects, language]);

  // Localized testimonials mapping
  const localizedTestimonials = React.useMemo(() => {
    let list = testimonials;
    if (language !== 'TJK') {
      list = testimonials.map(test => {
        const translationMap = defaultTestimonialTranslations[language];
        if (translationMap && translationMap[test.id]) {
          return {
            ...test,
            name: translationMap[test.id].name,
            position: translationMap[test.id].position,
            company: translationMap[test.id].company,
            feedback: translationMap[test.id].feedback,
          };
        }
        return test;
      });
    }
    return list.map(item => ({
      ...item,
      feedback: item.feedback ? item.feedback.replace(/Фаридун/g, 'Раҳматулло') : ''
    }));
  }, [testimonials, language]);

  // Localized process steps mapping
  const localizedProcessSteps = React.useMemo(() => {
    if (language === 'TJK') return PROCESS_STEPS;
    return PROCESS_STEPS.map(step => {
      const translationMap = defaultProcessTranslationsByStep[language];
      if (translationMap && translationMap[step.stepNumber]) {
        return {
          ...step,
          title: translationMap[step.stepNumber].title,
          description: translationMap[step.stepNumber].description,
          phaseResult: translationMap[step.stepNumber].phaseResult,
        };
      }
      return step;
    });
  }, [language]);

  
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Firebase Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user && user.email === 'aliali18122002@gmail.com') {
        setIsAdminLoggedIn(true);
      } else {
        setIsAdminLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Firebase Realtime Subscriptions
  useEffect(() => {
    const unsubProjects = onSnapshot(collection(db, 'projects'), (snapshot) => {
      if (!snapshot.empty) {
        setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project)));
      }
    }, (err) => handleFirestoreError(err, OperationType.LIST, 'projects'));

    const unsubServices = onSnapshot(collection(db, 'services'), (snapshot) => {
      if (!snapshot.empty) {
        setServices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Service)));
      }
    }, (err) => handleFirestoreError(err, OperationType.LIST, 'services'));

    const unsubTestimonials = onSnapshot(collection(db, 'testimonials'), (snapshot) => {
      if (!snapshot.empty) {
        setTestimonials(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Testimonial)));
      }
    }, (err) => handleFirestoreError(err, OperationType.LIST, 'testimonials'));

    const unsubStats = onSnapshot(doc(db, 'global', 'stats'), (docSnap) => {
      if (docSnap.exists()) {
        setStats(docSnap.data() as DeveloperStats);
      }
    }, (err) => handleFirestoreError(err, OperationType.GET, 'global/stats'));

    const unsubProfile = onSnapshot(doc(db, 'global', 'profile'), (docSnap) => {
      if (docSnap.exists()) {
        setProfile(docSnap.data() as DeveloperProfile);
      }
    }, (err) => handleFirestoreError(err, OperationType.GET, 'global/profile'));

    let unsubMessages = () => {};
    if (isAdminLoggedIn) {
      unsubMessages = onSnapshot(collection(db, 'messages'), (snapshot) => {
        setContactMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ContactMessage)));
      }, (err) => handleFirestoreError(err, OperationType.LIST, 'messages'));
    }

    return () => {
      unsubProjects();
      unsubServices();
      unsubTestimonials();
      unsubStats();
      unsubProfile();
      unsubMessages();
    };
  }, [isAdminLoggedIn]);

  // Auth Operations
  const loginAdmin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // We rely on the email check but the previous turn requested the code "988329085r"
      // Since it's Google Auth now, we just check email 
      if (result.user.email === 'aliali18122002@gmail.com') {
        return true;
      } else {
        alert('Access Denied: You are not authorized to be an administrator.');
        await auth.signOut();
        return false;
      }
    } catch (err: any) {
      console.error(err);
      return false;
    }
  };

  const logoutAdmin = async () => {
    await signOut(auth);
  };

  // Projects Operations
  const addProject = async (proj: Omit<Project, 'id'>) => {
    try {
      const id = `proj-${Date.now()}`;
      await setDoc(doc(db, 'projects', id), proj);
    } catch (err) { handleFirestoreError(err, OperationType.CREATE, 'projects'); }
  };
  const updateProject = async (proj: Project) => {
    try {
      const { id, ...data } = proj;
      await updateDoc(doc(db, 'projects', id), { ...data });
    } catch (err) { handleFirestoreError(err, OperationType.UPDATE, `projects/${proj.id}`); }
  };
  const deleteProject = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'projects', id));
    } catch (err) { handleFirestoreError(err, OperationType.DELETE, `projects/${id}`); }
  };

  // Services Operations
  const addService = async (serv: Omit<Service, 'id'>) => {
    try {
      const id = `serv-${Date.now()}`;
      await setDoc(doc(db, 'services', id), serv);
    } catch (err) { handleFirestoreError(err, OperationType.CREATE, 'services'); }
  };
  const updateService = async (serv: Service) => {
    try {
      const { id, ...data } = serv;
      await updateDoc(doc(db, 'services', id), { ...data });
    } catch (err) { handleFirestoreError(err, OperationType.UPDATE, `services/${serv.id}`); }
  };
  const deleteService = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'services', id));
    } catch (err) { handleFirestoreError(err, OperationType.DELETE, `services/${id}`); }
  };

  // Testimonials Operations
  const addTestimonial = async (test: Omit<Testimonial, 'id'>) => {
    try {
      const id = `test-${Date.now()}`;
      await setDoc(doc(db, 'testimonials', id), test);
    } catch (err) { handleFirestoreError(err, OperationType.CREATE, 'testimonials'); }
  };
  const updateTestimonial = async (test: Testimonial) => {
    try {
      const { id, ...data } = test;
      await updateDoc(doc(db, 'testimonials', id), { ...data });
    } catch (err) { handleFirestoreError(err, OperationType.UPDATE, `testimonials/${test.id}`); }
  };
  const deleteTestimonial = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'testimonials', id));
    } catch (err) { handleFirestoreError(err, OperationType.DELETE, `testimonials/${id}`); }
  };

  // Stats Operations
  const updateStats = async (newStats: DeveloperStats) => {
    try {
      await setDoc(doc(db, 'global', 'stats'), newStats);
    } catch (err) { handleFirestoreError(err, OperationType.UPDATE, `global/stats`); }
  };

  // Profile Operations
  const updateProfile = async (newProfile: DeveloperProfile) => {
    try {
      await setDoc(doc(db, 'global', 'profile'), newProfile);
    } catch (err) { handleFirestoreError(err, OperationType.UPDATE, `global/profile`); }
  };

  // Messages Operations
  const addContactMessage = async (msg: Omit<ContactMessage, 'id' | 'timestamp' | 'status'>) => {
    try {
      const id = `msg-${Date.now()}`;
      await setDoc(doc(db, 'messages', id), {
        ...msg,
        timestamp: new Date().toISOString(),
        status: 'new'
      });
    } catch (err) { handleFirestoreError(err, OperationType.CREATE, 'messages'); }
  };
  const updateMessageStatus = async (id: string, status: 'new' | 'responded' | 'archived') => {
    try {
      await updateDoc(doc(db, 'messages', id), { status });
    } catch (err) { handleFirestoreError(err, OperationType.UPDATE, `messages/${id}`); }
  };
  const deleteMessage = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'messages', id));
    } catch (err) { handleFirestoreError(err, OperationType.DELETE, `messages/${id}`); }
  };

  // Bulk Seed initialization (run once by admin to upload dummy data)
  const seedDatabase = async () => {
    if (!isAdminLoggedIn) return;
    try {
      await setDoc(doc(db, 'global', 'profile'), DEVELOPER_PROFILE);
      await setDoc(doc(db, 'global', 'stats'), DEVELOPER_STATS);
      
      const ps = PROJECTS_DATA.map(p => setDoc(doc(db, 'projects', p.id), { ...p, id: undefined }));
      const ss = SERVICES_DATA.map(s => setDoc(doc(db, 'services', s.id), { ...s, id: undefined }));
      const ts = TESTIMONIALS_DATA.map(t => setDoc(doc(db, 'testimonials', t.id), { ...t, id: undefined }));
      await Promise.all([...ps, ...ss, ...ts]);
      alert("Database seeded successfully!");
    } catch (err) { console.error('Seed failed', err); }
  }

  // Bind seeder globally for admin debugging manually
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).seedFirestore = seedDatabase;
    }
  }, [isAdminLoggedIn]);

  return (
    <AppContext.Provider
      value={{
        projects: localizedProjects,
        services: localizedServices,
        testimonials: localizedTestimonials,
        stats,
        profile: localizedProfile,
        contactMessages,
        isAdminLoggedIn,
        currentUser,
        language,
        setLanguage,
        t,
        processSteps: localizedProcessSteps,
        addProject,
        updateProject,
        deleteProject,
        addService,
        updateService,
        deleteService,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        updateStats,
        updateProfile,
        addContactMessage,
        updateMessageStatus,
        deleteMessage,
        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppContextProvider');
  }
  return context;
};
