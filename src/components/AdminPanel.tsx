import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Lock, LogOut, LayoutDashboard, Mail, FolderHeart, 
  Settings, Layers, Star, Plus, Trash2, Edit2, Check, 
  ExternalLink, Sparkles, RefreshCw, Smartphone, Award, ThumbsUp, Code, MessageSquare, AlertCircle,
  Upload, Image as ImageIcon
} from 'lucide-react';
import { useApp, ContactMessage } from '../context/AppContext';
import { Project, Service, Testimonial } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const {
    projects, services, testimonials, stats, profile, contactMessages, isAdminLoggedIn,
    addProject, updateProject, deleteProject,
    addService, updateService, deleteService,
    addTestimonial, updateTestimonial, deleteTestimonial,
    updateStats, updateProfile, updateMessageStatus, deleteMessage,
    loginAdmin, logoutAdmin
  } = useApp();

  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'profile' | 'stats' | 'messages' | 'projects' | 'services' | 'testimonials'>('stats');

  // Form states
  const [statForm, setStatForm] = useState({ ...stats });
  const [isStatsSaved, setIsStatsSaved] = useState(false);

  // Profile form states
  const [profileForm, setProfileForm] = useState({ ...profile });
  const [isProfileSaved, setIsProfileSaved] = useState(false);

  // Project form states
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectForm, setProjectForm] = useState<Omit<Project, 'id'>>({
    title: '',
    category: '',
    categoryId: 'websites',
    techStack: [],
    description: '',
    longDescription: '',
    features: [],
    image: '',
    fallbackImage: '',
    liveUrl: '',
    githubUrl: '',
    isComingSoon: false
  });
  const [newTech, setNewTech] = useState('');
  const [newFeature, setNewFeature] = useState('');
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

  // Service form states
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [serviceForm, setServiceForm] = useState<Omit<Service, 'id'>>({
    title: '',
    description: '',
    benefits: [],
    icon: 'Cpu',
    glowColor: 'blue'
  });
  const [newBenefit, setNewBenefit] = useState('');
  const [isServiceFormOpen, setIsServiceFormOpen] = useState(false);

  // Testimonial form states
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [testimonialForm, setTestimonialForm] = useState<Omit<Testimonial, 'id'>>({
    name: '',
    position: '',
    company: '',
    rating: 5,
    feedback: '',
    gender: 'male'
  });
  const [isTestimonialFormOpen, setIsTestimonialFormOpen] = useState(false);

  // Handle Log In
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (password === '988329085r') {
      const success = await loginAdmin();
      if (success) {
        setPassword('');
        setLoginError('');
        setStatForm({ ...stats });
        setProfileForm({ ...profile });
      } else {
        setLoginError('Authentication failed. Please use the developer Google account.');
      }
    } else {
      setLoginError('Калидвожа нодуруст аст!');
    }
  };

  // Stats save
  const handleStatsSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateStats(statForm);
    setIsStatsSaved(true);
    setTimeout(() => setIsStatsSaved(false), 3000);
  };

  // Profile save
  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
    setIsProfileSaved(true);
    setTimeout(() => setIsProfileSaved(false), 3000);
  };

  // Upload Profile image / avatar from gallery
  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setProfileForm(prev => ({ ...prev, avatarUrl: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Upload Project image from gallery
  const handleProjectImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setProjectForm(prev => ({ ...prev, image: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Sync profile when dynamic value changes
  React.useEffect(() => {
    if (profile) {
      setProfileForm({ ...profile });
    }
  }, [profile]);

  // Projects Operations
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.description) return;
    
    // Add default images if blank
    const finalProj = {
      ...projectForm,
      image: projectForm.image || 'https://picsum.photos/seed/project/800/600',
      fallbackImage: projectForm.fallbackImage || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
    };

    if (editingProject) {
      updateProject({ ...finalProj, id: editingProject.id });
      setEditingProject(null);
    } else {
      addProject(finalProj);
    }

    // Reset Form
    setProjectForm({
      title: '',
      category: '',
      categoryId: 'websites',
      techStack: [],
      description: '',
      longDescription: '',
      features: [],
      image: '',
      fallbackImage: '',
      liveUrl: '',
      githubUrl: '',
      isComingSoon: false
    });
    setIsProjectFormOpen(false);
  };

  const handleEditProjectClick = (p: Project) => {
    setEditingProject(p);
    setProjectForm({
      title: p.title,
      category: p.category,
      categoryId: p.categoryId,
      techStack: p.techStack,
      description: p.description,
      longDescription: p.longDescription,
      features: p.features,
      image: p.image,
      fallbackImage: p.fallbackImage,
      liveUrl: p.liveUrl || '',
      githubUrl: p.githubUrl || '',
      isComingSoon: p.isComingSoon || false
    });
    setIsProjectFormOpen(true);
  };

  // Services Operations
  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.title || !serviceForm.description) return;

    if (editingService) {
      updateService({ ...serviceForm, id: editingService.id });
      setEditingService(null);
    } else {
      addService(serviceForm);
    }

    setServiceForm({
      title: '',
      description: '',
      benefits: [],
      icon: 'Cpu',
      glowColor: 'blue'
    });
    setIsServiceFormOpen(false);
  };

  const handleEditServiceClick = (s: Service) => {
    setEditingService(s);
    setServiceForm({
      title: s.title,
      description: s.description,
      benefits: s.benefits,
      icon: s.icon,
      glowColor: s.glowColor
    });
    setIsServiceFormOpen(true);
  };

  // Testimonials Operations
  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testimonialForm.name || !testimonialForm.feedback) return;

    if (editingTestimonial) {
      updateTestimonial({ ...testimonialForm, id: editingTestimonial.id });
      setEditingTestimonial(null);
    } else {
      addTestimonial(testimonialForm);
    }

    setTestimonialForm({
      name: '',
      position: '',
      company: '',
      rating: 5,
      feedback: '',
      gender: 'male'
    });
    setIsTestimonialFormOpen(false);
  };

  const handleEditTestimonialClick = (t: Testimonial) => {
    setEditingTestimonial(t);
    setTestimonialForm({
      name: t.name,
      position: t.position,
      company: t.company,
      rating: t.rating,
      feedback: t.feedback,
      gender: t.gender
    });
    setIsTestimonialFormOpen(true);
  };

  const activeNewMessages = contactMessages.filter(m => m.status === 'new').length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-hidden font-sans"
        >
          {/* Main Panel Box */}
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl h-[90vh] bg-[#050505] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header section in dashboard */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-650 flex items-center justify-center font-black text-sm text-white">
                  A
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-2">
                    Админ Панел
                    {isAdminLoggedIn && (
                      <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono normal-case tracking-normal">
                        Фаъол
                      </span>
                    )}
                  </h2>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5">Идоракунии мукаммали сомона дар сонияҳо</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {isAdminLoggedIn && (
                  <button
                    onClick={logoutAdmin}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/25 transition-all font-semibold font-mono uppercase cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    Баромад
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Login Gateway Screen */}
            {!isAdminLoggedIn ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <motion.div 
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-cyan-400"
                >
                  <Lock className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Гузриши Махфӣ барои Адстратор</h3>
                <p className="text-xs text-gray-500 max-w-sm mb-6">
                  Барои тағир додани лоиҳаҳо, тамошои дархостҳо ва дигар бахшҳо рамзи махфиро ворид созед. (Рамзи санҷишӣ: <span className="text-cyan-400 font-mono">admin</span>)
                </p>

                <form onSubmit={handleLoginSubmit} className="w-full max-w-xs flex flex-col gap-3">
                  <input
                    type="password"
                    placeholder="Рамзи махфиро ворид созед..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none transition-all text-center"
                    autoFocus
                  />
                  {loginError && (
                    <div className="p-3 text-[10px] bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 flex items-center gap-2 text-left justify-center">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{loginError}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all cursor-pointer active:scale-95 duration-150"
                  >
                    ВУРУД БА ПАНЕЛ
                  </button>
                </form>
              </div>
            ) : (
              /* Authenticated Admin Dashboard Layout */
              <div className="flex-1 flex overflow-hidden">
                {/* Sidebar Navigation */}
                <div className="w-60 border-r border-white/5 bg-white/1 flex flex-col overflow-y-auto">
                  <div className="p-4 flex flex-col gap-1.5">
                    
                    {/* Profile tab trigger */}
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                        activeTab === 'profile' 
                          ? 'bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 text-cyan-400' 
                          : 'bg-transparent text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-cyan-400" />
                        Маълумот дар бораи ман
                      </span>
                    </button>

                    {/* Stats tab trigger */}
                    <button
                      onClick={() => setActiveTab('stats')}
                      className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                        activeTab === 'stats' 
                          ? 'bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 text-cyan-400' 
                          : 'bg-transparent text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <LayoutDashboard className="w-4 h-4" />
                        Асосӣ ва Статистика
                      </span>
                    </button>

                    {/* Messages tab trigger */}
                    <button
                      onClick={() => setActiveTab('messages')}
                      className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                        activeTab === 'messages' 
                          ? 'bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 text-cyan-400' 
                          : 'bg-transparent text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Дархостҳо ва Паёмҳо
                      </span>
                      {activeNewMessages > 0 && (
                        <span className="w-5 h-5 rounded-full bg-cyan-400 text-black text-[9px] font-bold font-mono flex items-center justify-center animate-pulse">
                          {activeNewMessages}
                        </span>
                      )}
                    </button>

                    {/* Projects tab trigger */}
                    <button
                      onClick={() => setActiveTab('projects')}
                      className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                        activeTab === 'projects' 
                          ? 'bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 text-cyan-400' 
                          : 'bg-transparent text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <FolderHeart className="w-4 h-4" />
                        Идораи Лоиҳаҳо
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono bg-white/5 px-2 py-0.5 rounded-md">
                        {projects.length}
                      </span>
                    </button>

                    {/* Services tab trigger */}
                    <button
                      onClick={() => setActiveTab('services')}
                      className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                        activeTab === 'services' 
                          ? 'bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 text-cyan-400' 
                          : 'bg-transparent text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        Идораи Хидматҳо
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono bg-white/5 px-2 py-0.5 rounded-md">
                        {services.length}
                      </span>
                    </button>

                    {/* Testimonials tab trigger */}
                    <button
                      onClick={() => setActiveTab('testimonials')}
                      className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                        activeTab === 'testimonials' 
                          ? 'bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 text-cyan-400' 
                          : 'bg-transparent text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Сипосномаҳо
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono bg-white/5 px-2 py-0.5 rounded-md">
                        {testimonials.length}
                      </span>
                    </button>

                  </div>

                  <div className="mt-auto p-4 border-t border-white/5">
                    <p className="text-[9px] text-gray-500 font-mono leading-relaxed uppercase">
                      ТАҲИЯИ РАҚАМӢ<br />TAJIK DEVELOPER LATEST V2
                    </p>
                  </div>
                </div>

                {/* Dashboard Tab Content Column */}
                <div className="flex-1 overflow-y-auto p-8 bg-black/40">
                  
                  {/* TAB: Developer Profile (About Me & Contact Links) */}
                  {activeTab === 'profile' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-8 text-left">
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">Танзими маълумоти ман (About Me & Socials)</h3>
                        <p className="text-xs text-gray-400 mt-1">Шумо метавонед ном, вазифа, биографӣ, рақами алоқа ва суратро дар ин ҷо тағйир диҳед.</p>
                      </div>

                      <form onSubmit={handleProfileSave} className="flex flex-col gap-6 max-w-3xl bg-white/2 p-6 rounded-2xl border border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {/* Website Name */}
                          <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Номи Вебсайт (Website Name / Title)</label>
                            <input
                              type="text"
                              value={profileForm.websiteName || ''}
                              onChange={(e) => setProfileForm({ ...profileForm, websiteName: e.target.value })}
                              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all font-mono"
                              placeholder="Rahmatullo.com"
                              required
                            />
                          </div>

                          {/* Website Logo */}
                          <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Логотипи Вебсайт (Website Logo)</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col justify-center items-center p-4 border border-dashed border-white/10 rounded-xl bg-white/2 hover:bg-[#111] hover:border-cyan-400/30 transition-all gap-2 relative group min-h-[90px]">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      const r = new FileReader();
                                      r.onloadend = () => { if (r.result) setProfileForm(p => ({ ...p, logoUrl: r.result as string })); };
                                      r.readAsDataURL(file);
                                    }
                                  }}
                                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                />
                                <Upload className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                                <span className="text-xs text-white font-bold">Боргузории логотип аз галерея</span>
                                <span className="text-[10px] text-gray-550 font-mono">Акси худро ҳамчун лого интихоб кунед</span>
                              </div>
                              <div className="flex gap-3 items-center bg-white/1 p-3 rounded-xl border border-white/5">
                                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/5 border border-white/10 shrink-0 flex items-center justify-center relative shadow-inner p-1">
                                  {profileForm.logoUrl ? (
                                    <img src={profileForm.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                                  ) : (
                                    <span className="text-white font-black text-xl">TD</span>
                                  )}
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                  <span className="text-[10px] text-gray-400 font-mono">Ё суроғаи интернетии суратро ворид кунед:</span>
                                  <input
                                    type="text"
                                    value={profileForm.logoUrl || ''}
                                    onChange={(e) => setProfileForm({ ...profileForm, logoUrl: e.target.value })}
                                    className="w-full bg-[#111] border border-white/10 rounded-xl px-3 py-1.5 text-[11px] text-white focus:border-cyan-400 focus:outline-none transition-all font-mono"
                                    placeholder="Пайванд ба лого..."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Full Name */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Ному Насаб (Name)</label>
                            <input
                              type="text"
                              value={profileForm.name}
                              onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all"
                              required
                            />
                          </div>

                          {/* Role Badge */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Вазифа ё Ташкилот (Role / Badge)</label>
                            <input
                              type="text"
                              value={profileForm.role}
                              onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all"
                              required
                            />
                          </div>

                          {/* Intro Title */}
                          <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Эълони салом (Intro Title / Header Greeting)</label>
                            <input
                              type="text"
                              value={profileForm.introTitle}
                              onChange={(e) => setProfileForm({ ...profileForm, introTitle: e.target.value })}
                              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all"
                              required
                            />
                          </div>

                          {/* Bio */}
                          <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Дар бораи ман (Biography Details)</label>
                            <textarea
                              rows={4}
                              value={profileForm.bio}
                              onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all leading-relaxed"
                              required
                            />
                          </div>

                          {/* Quote */}
                          <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Ақида ё Иқтибос (Personal Quote or Motto)</label>
                            <textarea
                              rows={2}
                              value={profileForm.quote}
                              onChange={(e) => setProfileForm({ ...profileForm, quote: e.target.value })}
                              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all"
                            />
                          </div>

                          {/* Avatar URL / File upload */}
                          <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Сурати ман (Profile Photo)</label>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Upload from local device/gallery */}
                              <div className="flex flex-col justify-center items-center p-4 border border-dashed border-white/10 rounded-xl bg-white/2 hover:bg-[#111] hover:border-cyan-400/30 transition-all gap-2 relative group min-h-[90px]">
                                <input
                                  type="file"
                                  id="profile-upload"
                                  accept="image/*"
                                  onChange={handleProfileImageUpload}
                                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                />
                                <Upload className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                                <span className="text-xs text-white font-bold">Боргузории сурат аз галерея</span>
                                <span className="text-[10px] text-gray-550 font-mono">PNG, JPG, WEBP то 5MB</span>
                              </div>

                              {/* Preview and direct URL inputs */}
                              <div className="flex gap-3 items-center bg-white/1 p-3 rounded-xl border border-white/5">
                                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/5 border border-white/10 shrink-0 relative shadow-inner">
                                  <img
                                    src={profileForm.avatarUrl || null}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).src = '/src/assets/images/ceo_avatar_1780079501339.png';
                                    }}
                                  />
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                  <span className="text-[10px] text-gray-400 font-mono">Ё суроғаи интернетии суратро ворид кунед:</span>
                                  <input
                                    type="text"
                                    value={profileForm.avatarUrl}
                                    onChange={(e) => setProfileForm({ ...profileForm, avatarUrl: e.target.value })}
                                    className="w-full bg-[#111] border border-white/10 rounded-xl px-3 py-1.5 text-[11px] text-white focus:border-cyan-400 focus:outline-none transition-all font-mono"
                                    placeholder="Пайванд ба сурат..."
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Telegram Contact URL / Username */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Telegram Юзернейм (бе @ ё URL)</label>
                            <input
                              type="text"
                              value={profileForm.telegram}
                              onChange={(e) => setProfileForm({ ...profileForm, telegram: e.target.value })}
                              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all font-mono"
                              placeholder="aliali18122002"
                              required
                            />
                          </div>

                          {/* WhatsApp contact number */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">WhatsApp Рақам (бо коди кишвар)</label>
                            <input
                              type="text"
                              value={profileForm.whatsapp}
                              onChange={(e) => setProfileForm({ ...profileForm, whatsapp: e.target.value })}
                              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all font-mono"
                              placeholder="992900000000"
                              required
                            />
                          </div>

                          {/* GitHub context link */}
                          <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">GitHub Юзернейм (ё URL)</label>
                            <input
                              type="text"
                              value={profileForm.github}
                              onChange={(e) => setProfileForm({ ...profileForm, github: e.target.value })}
                              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-all font-mono"
                              placeholder="tajik-dev"
                              required
                            />
                          </div>
                        </div>

                        {/* Submit Row */}
                        <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-2">
                          <button
                            type="button"
                            onClick={() => setProfileForm({ ...profile })}
                            className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all rounded-xl text-xs font-bold cursor-pointer"
                          >
                            Аз нав барқарор кардан
                          </button>
                          
                          <button
                            type="submit"
                            className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-2"
                          >
                            {isProfileSaved ? (
                              <>
                                <Check className="w-4 h-4" />
                                МАҲФУЗ ГАРДИД!
                              </>
                            ) : (
                              <>
                                <RefreshCw className="w-4 h-4" />
                                НАВ КАРДАНИ МАЪЛУМОТ
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {/* TAB 1: Developer Statistics */}
                  {activeTab === 'stats' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-8 text-left">
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">Нишондиҳандаҳо ва Омор (Statistics)</h3>
                        <p className="text-xs text-gray-400 mt-1">Нишондиҳандаҳои асосии фаъолият, ки дар бахши "Дар бораи ман" нишон дода мешаванд, танзим намоед.</p>
                        
                        {projects.length === 0 && (
                          <button 
                            type="button" 
                            onClick={async () => {
                              if (typeof window !== 'undefined' && (window as any).seedFirestore) {
                                await (window as any).seedFirestore();
                              }
                            }}
                            className="mt-4 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 border border-cyan-500/50 px-4 py-2 rounded-lg text-xs font-semibold"
                          >
                            Махзани маълумотро (Database) бо маълумотҳои аввалия пур кунед
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-cyan-400/10">
                          <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400"><Code className="w-5 h-5"/></div>
                          <div className="flex-1">
                            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Лоиҳаҳо</p>
                            <p className="text-2xl font-black text-white">{stats.projectsCount}+</p>
                          </div>
                        </div>
                        <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-purple-500/10">
                          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400"><Award className="w-5 h-5"/></div>
                          <div className="flex-1">
                            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest font-sans">Таҷриба</p>
                            <p className="text-2xl font-black text-white">{stats.experienceYears} Соли</p>
                          </div>
                        </div>
                        <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-amber-500/10">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400"><ThumbsUp className="w-5 h-5"/></div>
                          <div className="flex-1">
                            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Рейтинги Хушнудӣ</p>
                            <p className="text-2xl font-black text-white">{stats.clientsSatisfaction}%</p>
                          </div>
                        </div>
                        <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-emerald-500/10">
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400"><Smartphone className="w-5 h-5"/></div>
                          <div className="flex-1">
                            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Mini Apps</p>
                            <p className="text-2xl font-black text-white">{stats.miniAppsCreated}+</p>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleStatsSave} className="glass-card p-6 border border-white/5 rounded-3xl flex flex-col gap-6 max-w-2xl bg-[#090909]">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white">Танзими Қиматҳои Статистика</h4>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Лоиҳаҳои тайёршуда</label>
                            <input
                              type="number"
                              value={statForm.projectsCount}
                              onChange={(e) => setStatForm({ ...statForm, projectsCount: Number(e.target.value) })}
                              className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none"
                            />
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Солҳои таҷрибаи касбӣ</label>
                            <input
                              type="number"
                              value={statForm.experienceYears}
                              onChange={(e) => setStatForm({ ...statForm, experienceYears: Number(e.target.value) })}
                              className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none"
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Қаноатмандии мизоҷон (%)</label>
                            <input
                              type="number"
                              value={statForm.clientsSatisfaction}
                              onChange={(e) => setStatForm({ ...statForm, clientsSatisfaction: Number(e.target.value) })}
                              className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none"
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Замимаҳои Mini Apps</label>
                            <input
                              type="number"
                              value={statForm.miniAppsCreated}
                              onChange={(e) => setStatForm({ ...statForm, miniAppsCreated: Number(e.target.value) })}
                              className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none"
                            />
                          </div>
                        </div>

                        {isStatsSaved && (
                          <div className="p-3 text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            Статистика бо муваффақият сабт шуд ва дар заминаи сайт тағйир ёфт!
                          </div>
                        )}

                        <button
                          type="submit"
                          className="self-start px-6 py-3 rounded-xl bg-white text-black font-extrabold text-xs uppercase hover:bg-cyan-400 transition-all cursor-pointer"
                        >
                          Сабт НИШОНДОДҲО
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* TAB 2: Messages Inbox */}
                  {activeTab === 'messages' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-8 text-left">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight">Қуттии Дархостҳо ва Паёмҳо (Inbox)</h3>
                          <p className="text-xs text-gray-400 mt-1">Ҳамаи дархостҳо ва супоришҳое, ки муштариён аз сомона фиристодаанд.</p>
                        </div>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-xl text-[11px] font-mono text-gray-300 uppercase">
                          Ҳамагӣ: {contactMessages.length} дархост
                        </span>
                      </div>

                      {contactMessages.length === 0 ? (
                        <div className="p-12 border border-white/5 rounded-3xl text-center bg-white/1">
                          <Mail className="w-8 h-8 mx-auto text-gray-600 mb-4" />
                          <p className="text-sm text-gray-400 font-bold">Ҳеҷ гуна дархост ёфт нашуд.</p>
                          <p className="text-[11px] text-gray-500 mt-1">Вакте ки корбар аз саҳифаи алоқа паём мефиристад, он дар ин ҷо пайдо мешавад.</p>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-4">
                          {contactMessages.map((msg) => (
                            <div
                              key={msg.id}
                              className={`glass-card p-6 border rounded-3xl transition-all relative ${
                                msg.status === 'new' 
                                  ? 'border-cyan-400/20 bg-cyan-400/2' 
                                  : msg.status === 'responded' 
                                  ? 'border-emerald-500/10 bg-emerald-500/1' 
                                  : 'border-white/5 bg-transparent opacity-65 hover:opacity-100'
                              }`}
                            >
                              {/* Top row details */}
                              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-sm text-white">
                                    {msg.name.charAt(0)}
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-bold text-white">{msg.name}</h4>
                                    <p className="text-[10px] text-gray-500 mt-0.5">
                                      {msg.company ? `Ширкат: ${msg.company} • ` : ''} Алоқа: <span className="text-gray-300 font-semibold">{msg.contactHandle}</span>
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  {/* Badge showing type of work requested */}
                                  <span className="px-2.5 py-1 rounded-lg bg-[#111] border border-white/15 text-[9px] font-mono font-bold uppercase tracking-wider text-purple-400">
                                    {msg.serviceType}
                                  </span>
                                  {/* Datetime indicator */}
                                  <span className="text-[10px] text-gray-500 font-mono">
                                    {new Date(msg.timestamp).toLocaleString()}
                                  </span>
                                </div>
                              </div>

                              {/* Message text description box */}
                              <p className="text-xs text-gray-300 leading-relaxed font-sans bg-black/30 p-4 rounded-xl border border-white/5">
                                {msg.message}
                              </p>

                              {/* Action controls button layout */}
                              <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-2">
                                <div className="flex items-center gap-2">
                                  {msg.status !== 'responded' && (
                                    <button
                                      onClick={() => updateMessageStatus(msg.id, 'responded')}
                                      className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 hover:bg-emerald-500/20 transition-all cursor-pointer"
                                    >
                                      ✓ Тамос гирифтам
                                    </button>
                                  )}
                                  {msg.status !== 'archived' && (
                                    <button
                                      onClick={() => updateMessageStatus(msg.id, 'archived')}
                                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 hover:bg-white/10 transition-all cursor-pointer"
                                    >
                                      Архив кардан
                                    </button>
                                  )}
                                  {msg.status !== 'new' && (
                                    <button
                                      onClick={() => updateMessageStatus(msg.id, 'new')}
                                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-cyan-400 hover:bg-white/10 transition-all cursor-pointer"
                                    >
                                      Ҳолати нав
                                    </button>
                                  )}
                                </div>

                                <div className="flex items-center gap-2">
                                  <a
                                    href={msg.contactHandle.startsWith('+') ? `https://wa.me/${msg.contactHandle}` : `https://t.me/${msg.contactHandle.replace('@', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 rounded-lg bg-cyan-400 text-black text-[10px] font-black uppercase tracking-tight hover:scale-105 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                                  >
                                    Алоқа мустақим
                                    <ExternalLink className="w-3 h-3 text-black" />
                                  </a>
                                  <button
                                    onClick={() => deleteMessage(msg.id)}
                                    className="w-8 h-8 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 flex items-center justify-center text-rose-400 transition-all cursor-pointer"
                                    title="Нест кардани паём"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* TAB 3: Projects Admin */}
                  {activeTab === 'projects' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-8 text-left">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight">Лоиҳаҳои Портфолио</h3>
                          <p className="text-xs text-gray-400 mt-1">Лоиҳаҳои тайёркардаатонро илова намоед ё таҳрир кунед. Тағйиротҳо фавран дар бахши лоиҳаҳо инъикос меёбанд.</p>
                        </div>
                        <button
                          onClick={() => {
                            setEditingProject(null);
                            setProjectForm({
                              title: '',
                              category: '',
                              categoryId: 'websites',
                              techStack: [],
                              description: '',
                              longDescription: '',
                              features: [],
                              image: '',
                              fallbackImage: '',
                              liveUrl: '',
                              githubUrl: ''
                            });
                            setIsProjectFormOpen(true);
                          }}
                          className="px-4 py-2.5 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-xl text-black font-extrabold text-xs uppercase tracking-tight hover:shadow-[0_0_15px_rgba(34,211,238,0.25)] flex items-center gap-1.5 cursor-pointer"
                        >
                          <Plus className="w-4 h-4 text-black font-bold" />
                          Иловаи Лоиҳа
                        </button>
                      </div>

                      {/* Modal Panel within Admin specifically for Project Add/Edit Details */}
                      {isProjectFormOpen && (
                        <div className="p-6 border border-white/10 rounded-3xl bg-[#090909] flex flex-col gap-6">
                          <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                              {editingProject ? 'Таҳрири Лоиҳа' : 'Илова намудани Лоиҳаи Нав'}
                            </h4>
                            <button
                              onClick={() => {
                                setIsProjectFormOpen(false);
                                setEditingProject(null);
                              }}
                              className="text-gray-400 hover:text-white"
                            >
                              Пӯшидан ×
                            </button>
                          </div>

                          <form onSubmit={handleAddProject} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Номи Лоиҳа *</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Tamosho Cinema..."
                                  value={projectForm.title}
                                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                                />
                              </div>

                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Категория (Барои намоиш) *</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Telegram Mini App..."
                                  value={projectForm.category}
                                  onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                                />
                              </div>
                            </div>

                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Категория (Филтр) *</label>
                                <select
                                  value={projectForm.categoryId}
                                  onChange={(e) => setProjectForm({ ...projectForm, categoryId: e.target.value as any })}
                                  className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-xs text-white cursor-pointer"
                                >
                                  <option value="websites">Вебсайт / Платформа</option>
                                  <option value="miniapps">Telegram Mini App</option>
                                  <option value="erp">Системаи ERP</option>
                                  <option value="pos">Системаи POS / Савдо</option>
                                  <option value="bots">Telegram Бот</option>
                                </select>
                              </div>

                              <div className="flex flex-col justify-center p-3.5 bg-white/2 rounded-xl border border-white/5 gap-1.5 text-left">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2 cursor-pointer select-none">
                                  <input
                                    type="checkbox"
                                    checked={projectForm.isComingSoon || false}
                                    onChange={(e) => setProjectForm({ ...projectForm, isComingSoon: e.target.checked })}
                                    className="accent-cyan-400 w-4 h-4 rounded cursor-pointer"
                                  />
                                  <span className="text-white font-bold text-[11px] uppercase tracking-wider">Лоиҳаи Ба Зудӣ (Coming Soon)</span>
                                </label>
                                <span className="text-[9px] text-gray-500 font-mono leading-tight">Муаррифӣ бо нишони махсуси "Ба Зудӣ" дар портали асосӣ</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Технологияҳо (Калимаҳои калидӣ)</label>
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    placeholder="React, TypeScript..."
                                    value={newTech}
                                    onChange={(e) => setNewTech(e.target.value)}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (newTech.trim()) {
                                        setProjectForm({
                                          ...projectForm,
                                          techStack: [...projectForm.techStack, newTech.trim()]
                                        });
                                        setNewTech('');
                                      }
                                    }}
                                    className="px-4 bg-white text-black font-extrabold text-xs rounded-xl cursor-pointer"
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-1.5">
                                  {projectForm.techStack.map((tech) => (
                                    <span key={tech} className="bg-white/5 border border-white/10 text-gray-300 text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1.5">
                                      {tech}
                                      <button
                                        type="button"
                                        onClick={() => setProjectForm({
                                          ...projectForm,
                                          techStack: projectForm.techStack.filter(v => v !== tech)
                                        })}
                                        className="text-rose-400 hover:text-rose-600 font-bold ml-1"
                                      >
                                        ×
                                      </button>
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Тавсифи кӯтоҳ *</label>
                              <input
                                type="text"
                                required
                                placeholder="Мисол: Як замимаи мукаммали киномании премиум дар дохили Telegram..."
                                value={projectForm.description}
                                onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                              />
                            </div>

                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Тавсифи муфассал (Барои бахши тафсилот)</label>
                              <textarea
                                value={projectForm.longDescription}
                                onChange={(e) => setProjectForm({ ...projectForm, longDescription: e.target.value })}
                                placeholder="Тавсифи том ва мукаммал бо дақиқият ба ҳадафҳои сохт..."
                                rows={3}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white resize-none"
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Хусусиятҳои фарқкунанда (Features)</label>
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    placeholder="Мисол: Пардохти худкор бо кортҳои миллӣ..."
                                    value={newFeature}
                                    onChange={(e) => setNewFeature(e.target.value)}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (newFeature.trim()) {
                                        setProjectForm({
                                          ...projectForm,
                                          features: [...projectForm.features, newFeature.trim()]
                                        });
                                        setNewFeature('');
                                      }
                                    }}
                                    className="px-4 bg-white text-black font-extrabold text-xs rounded-xl cursor-pointer"
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="flex flex-col gap-1.5 mt-1.5 text-left">
                                  {projectForm.features.map((feat) => (
                                    <span key={feat} className="bg-white/5 border border-white/10 text-gray-300 text-[10px] p-2 rounded-lg flex items-center justify-between">
                                      {feat}
                                      <button
                                        type="button"
                                        onClick={() => setProjectForm({
                                          ...projectForm,
                                          features: projectForm.features.filter(v => v !== feat)
                                        })}
                                        className="text-rose-400 hover:text-rose-600 font-bold ml-3"
                                      >
                                        Нест кардан
                                      </button>
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-1.5">
                                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Акси Лоиҳа</label>
                                  
                                  {/* Select file from gallery */}
                                  <div className="flex flex-col items-center justify-center p-3 border border-dashed border-white/10 rounded-xl bg-[#111] hover:border-cyan-400/30 transition-all relative group cursor-pointer">
                                    <input
                                      type="file"
                                      id="project-upload"
                                      accept="image/*"
                                      onChange={handleProjectImageUpload}
                                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                    />
                                    <div className="flex items-center gap-2">
                                      <Upload className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                                      <span className="text-xs text-white font-bold">Боргузории акс аз галерея</span>
                                    </div>
                                  </div>

                                  {/* Or input direct URL */}
                                  <div className="flex gap-2 items-center mt-1">
                                    <input
                                      type="text"
                                      placeholder="Ё суроғаи интернетии аксро гузоред..."
                                      value={projectForm.image}
                                      onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-[11px] text-white focus:outline-none focus:border-cyan-400 font-mono"
                                    />
                                    {projectForm.image && (
                                      <div className="w-9 h-9 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-white/5 relative">
                                        <img 
                                          src={projectForm.image || null} 
                                          alt="Preview" 
                                          className="w-full h-full object-cover"
                                          onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/project/800/600';
                                          }}
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Пайванди Live (URL)</label>
                                  <input
                                    type="text"
                                    placeholder="https://t.me/tamosho_cinema_bot"
                                    value={projectForm.liveUrl}
                                    onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                              <button
                                type="button"
                                onClick={() => {
                                  setIsProjectFormOpen(false);
                                  setEditingProject(null);
                                }}
                                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white font-bold cursor-pointer"
                              >
                                Лағв
                              </button>
                              <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-extrabold text-xs uppercase cursor-pointer"
                              >
                                {editingProject ? 'Сабти Тағйирот' : 'Илова кардан'}
                              </button>
                            </div>
                          </form>
                        </div>
                      )}

                      {/* Display projects list with Edit / Delete actions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((proj) => (
                          <div key={proj.id} className="p-5 border border-white/5 rounded-2xl bg-white/1 flex items-start gap-4 justify-between">
                            <div className="flex items-start gap-4">
                              <div className="w-16 h-12 rounded-lg overflow-hidden bg-[#222] shrink-0 border border-white/10">
                                <img src={proj.image || null} alt={proj.title} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-white leading-tight">{proj.title}</h4>
                                <p className="text-[10px] text-purple-400 font-mono mt-1 uppercase tracking-wider">{proj.category}</p>
                                <p className="text-[10px] text-gray-500 mt-1.5 h-8 overflow-hidden line-clamp-2">{proj.description}</p>
                              </div>
                            </div>

                            <div className="flex gap-1.5">
                              <button
                                onClick={() => handleEditProjectClick(proj)}
                                className="p-2 bg-white/5 border border-white/10 rounded-lg text-cyan-400 hover:bg-white/10 transition-all cursor-pointer"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => deleteProject(proj.id)}
                                className="p-2 bg-rose-500/10 border border-rose-500/10 rounded-lg text-rose-450 hover:bg-rose-500/20 transition-all cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 4: Services Admin */}
                  {activeTab === 'services' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-8 text-left">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight">Хидматҳои Пешниҳодшаванда</h3>
                          <p className="text-xs text-gray-400 mt-1">Хидматҳо ва корҳоеро, ки метавонед ба мизоҷон пешниҳод кунед, идора кунед.</p>
                        </div>
                        <button
                          onClick={() => {
                            setEditingService(null);
                            setServiceForm({
                              title: '',
                              description: '',
                              benefits: [],
                              icon: 'Cpu',
                              glowColor: 'blue'
                            });
                            setIsServiceFormOpen(true);
                          }}
                          className="px-4 py-2.5 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-xl text-black font-extrabold text-xs uppercase tracking-tight flex items-center gap-1.5 cursor-pointer"
                        >
                          <Plus className="w-4 h-4 text-black" />
                          Иловаи Хидмат
                        </button>
                      </div>

                      {/* Service Form Editor */}
                      {isServiceFormOpen && (
                        <div className="p-6 border border-white/10 rounded-3xl bg-[#090909] flex flex-col gap-6">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/5 pb-4">
                            {editingService ? 'Таҳрири Хидмат' : 'Илова намудани Хидмати Нав'}
                          </h4>

                          <form onSubmit={handleAddService} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Номи Хидмат *</label>
                                <input
                                  type="text"
                                  required
                                  value={serviceForm.title}
                                  onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                                  placeholder="Landing Page сомона..."
                                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                                />
                              </div>

                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-sans">Ороиши Нури Глоу (Glow)</label>
                                <select
                                  value={serviceForm.glowColor}
                                  onChange={(e) => setServiceForm({ ...serviceForm, glowColor: e.target.value as any })}
                                  className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-xs text-white cursor-pointer"
                                >
                                  <option value="blue">Кабуд (Blue)</option>
                                  <option value="purple">Бунафш (Purple)</option>
                                  <option value="gold">Тиллоӣ (Gold)</option>
                                  <option value="teal">Фирӯзаӣ (Teal)</option>
                                </select>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Икона (Нишони Люсид)</label>
                              <input
                                type="text"
                                value={serviceForm.icon}
                                onChange={(e) => setServiceForm({ ...serviceForm, icon: e.target.value })}
                                placeholder="Cpu, Globe, Smartphone, Figma..."
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                              />
                            </div>

                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-sans">Тавсифи Хизматҳо *</label>
                              <textarea
                                required
                                value={serviceForm.description}
                                onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                                placeholder="Мисол: Тарҳрезӣ ва сохтани вебсайтҳои зебо ва мувофиқи эҳтиёҷоти бренд..."
                                rows={2}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white resize-none"
                              />
                            </div>

                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Афзалиятҳо ва Судҳо (Benefits)</label>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  value={newBenefit}
                                  onChange={(e) => setNewBenefit(e.target.value)}
                                  placeholder="Суръати тез, SEO Оптимизация..."
                                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (newBenefit.trim()) {
                                      setServiceForm({
                                        ...serviceForm,
                                        benefits: [...serviceForm.benefits, newBenefit.trim()]
                                      });
                                      setNewBenefit('');
                                    }
                                  }}
                                  className="px-4 bg-white text-black font-extrabold text-xs rounded-xl cursor-pointer"
                                >
                                  +
                                </button>
                              </div>
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {serviceForm.benefits.map((benefit) => (
                                  <span key={benefit} className="bg-white/5 border border-white/10 text-gray-300 text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                                    {benefit}
                                    <button
                                      type="button"
                                      onClick={() => setServiceForm({
                                        ...serviceForm,
                                        benefits: serviceForm.benefits.filter(b => b !== benefit)
                                      })}
                                      className="text-rose-450 hover:text-rose-600 font-black"
                                    >
                                      ×
                                    </button>
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                              <button
                                type="button"
                                onClick={() => {
                                  setIsServiceFormOpen(false);
                                  setEditingService(null);
                                }}
                                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white cursor-pointer"
                              >
                                Лағв
                              </button>
                              <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-extrabold text-xs uppercase cursor-pointer"
                              >
                                {editingService ? 'Сабти тағирот' : 'Сабт намудан'}
                              </button>
                            </div>
                          </form>
                        </div>
                      )}

                      {/* Service grid preview items */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((s) => (
                          <div key={s.id} className="p-5 border border-white/5 rounded-2xl bg-[#0a0a0a] flex items-start gap-4 justify-between">
                            <div className="text-left flex-1">
                              <h4 className="text-xs font-bold text-white">{s.title}</h4>
                              <p className="text-[10px] text-gray-500 mt-1 font-mono">Глоу: <span className="text-cyan-400 font-bold">{s.glowColor}</span> • Икона: {s.icon}</p>
                              <p className="text-[10px] text-gray-400 mt-1.5 leading-relaxed line-clamp-2">{s.description}</p>
                            </div>
                            <div className="flex gap-1.5 shrink-0 ml-4">
                              <button
                                onClick={() => handleEditServiceClick(s)}
                                className="p-2 bg-white/5 border border-white/10 rounded-lg text-cyan-400 cursor-pointer"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => deleteService(s.id)}
                                className="p-2 bg-rose-500/10 border border-rose-500/10 rounded-lg text-rose-455 cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 5: Testimonials Admin */}
                  {activeTab === 'testimonials' && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-8 text-left">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight">Фидбекҳо ва Сипосномаҳои Мизоҷон</h3>
                          <p className="text-xs text-gray-400 mt-1">Таҳрири шарҳҳои муштариён, ки ба кори шумо баҳои калон медиҳанд.</p>
                        </div>
                        <button
                          onClick={() => {
                            setEditingTestimonial(null);
                            setTestimonialForm({
                              name: '',
                              position: '',
                              company: '',
                              rating: 5,
                              feedback: '',
                              gender: 'male'
                            });
                            setIsTestimonialFormOpen(true);
                          }}
                          className="px-4 py-2.5 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-xl text-black font-extrabold text-xs uppercase tracking-tight flex items-center gap-1.5 cursor-pointer"
                        >
                          <Plus className="w-4 h-4 text-black" />
                          Иловаи Сипоснома
                        </button>
                      </div>

                      {/* Testimonial Form Editor */}
                      {isTestimonialFormOpen && (
                        <div className="p-6 border border-white/10 rounded-3xl bg-[#090909] flex flex-col gap-6">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/5 pb-4">
                            {editingTestimonial ? 'Таҳрири Сипоснома' : 'Илова намудани Сипосномаи Нав'}
                          </h4>

                          <form onSubmit={handleAddTestimonial} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Ному насаби мизоҷ *</label>
                                <input
                                  type="text"
                                  required
                                  value={testimonialForm.name}
                                  onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                                  placeholder="Алишер Раҳимов..."
                                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                                />
                              </div>

                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-sans">Мавқеъ ва Вазифа</label>
                                <input
                                  type="text"
                                  value={testimonialForm.position}
                                  onChange={(e) => setTestimonialForm({ ...testimonialForm, position: e.target.value })}
                                  placeholder="Асосгузор ва Директор..."
                                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Номи Ширкат / Идораи дахлдор</label>
                                <input
                                  type="text"
                                  value={testimonialForm.company}
                                  onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                                  placeholder="Иттиҳодияи Сохтмон кд..."
                                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                                />
                              </div>

                              <div className="flex grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex-1 flex flex-col gap-2">
                                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Баҳо (Рейтинг 1-5)</label>
                                  <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={testimonialForm.rating}
                                    onChange={(e) => setTestimonialForm({ ...testimonialForm, rating: Number(e.target.value) })}
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white"
                                  />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Ҷинсӣ (барои Суръат)</label>
                                  <select
                                    value={testimonialForm.gender}
                                    onChange={(e) => setTestimonialForm({ ...testimonialForm, gender: e.target.value as any })}
                                    className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-xs text-white cursor-pointer"
                                  >
                                    <option value="male">Мардона (Male)</option>
                                    <option value="female">Зан Пурра (Female)</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Сипоснома ва Фидбек *</label>
                              <textarea
                                required
                                value={testimonialForm.feedback}
                                onChange={(e) => setTestimonialForm({ ...testimonialForm, feedback: e.target.value })}
                                placeholder="Матни пурраи шарҳ ва сипосгузорӣ..."
                                rows={3}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white resize-none"
                              />
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                              <button
                                type="button"
                                onClick={() => {
                                  setIsTestimonialFormOpen(false);
                                  setEditingTestimonial(null);
                                }}
                                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white cursor-pointer"
                              >
                                Лағв
                              </button>
                              <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-extrabold text-xs uppercase cursor-pointer"
                              >
                                {editingTestimonial ? 'Сабти тағирот' : 'Ҳифз кандан'}
                              </button>
                            </div>
                          </form>
                        </div>
                      )}

                      {/* Display reviews list */}
                      <div className="flex flex-col gap-4">
                        {testimonials.map((t) => (
                          <div key={t.id} className="p-5 border border-white/5 rounded-2xl bg-[#090909] flex items-start gap-4 justify-between text-left">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="text-xs font-black text-white">{t.name}</h4>
                                <span className="text-[9px] text-gray-500 font-mono italic">({t.position}, {t.company})</span>
                              </div>
                              <p className="text-[10px] text-amber-400 font-mono mt-1 font-semibold">Баҳо: {t.rating} ★</p>
                              <p className="text-[11px] text-gray-300 mt-2 italic font-sans leading-relaxed">« {t.feedback} »</p>
                            </div>

                            <div className="flex gap-1.5 shrink-0 ml-4">
                              <button
                                onClick={() => handleEditTestimonialClick(t)}
                                className="p-2 bg-white/5 border border-white/10 rounded-lg text-cyan-400 cursor-pointer"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => deleteTestimonial(t.id)}
                                className="p-2 bg-rose-500/10 border border-rose-500/10 rounded-lg text-rose-455 cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                </div>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
