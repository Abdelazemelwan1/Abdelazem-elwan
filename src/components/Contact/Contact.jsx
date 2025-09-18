
import React, { useState, useEffect } from 'react';
import Style from "./Contact.module.css"
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaInstagram, FaTiktok, FaPaperPlane, FaUser, FaEnvelope, FaComment, FaCamera,FaHeart,FaReply,FaTrash,FaCog,FaLinkedin} from 'react-icons/fa';
import { SiFacebook, SiTiktok } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { collection, addDoc , getDocs, doc, updateDoc, increment } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { db } from "./../../firebase"; // استدعاء فايربيز

const Contact = () => {
  const { t  ,i18n  } = useTranslation();
  // Contact Meبتاع ال  input بتاع ال 
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // بيبين الحاله بتاعو Contact Me بتاع ال submit بتاع زرار ال 
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  // States  comments بتاع اترك تعليقinput  الحاله بتاع ال 
  const [commentForm, setCommentForm] = useState({
    name: '',
    message: '',
    photo: null,
    photoPreview: null
  });

// الي بخزن فيها التعليقاتstate  ال 
  const [comments, setComments] = useState([]);

  // بتاع التعليقاتsubmit  زرار ال 
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  // Load comments dari localStorage (simulasi JSON file)
  useEffect(() => {
    const savedComments = localStorage.getItem('portfolioComments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Handle contact form  بتاع اتصل بي form بتهندل ال
  const handleContactSubmit = async (e) => {
    
  e.preventDefault();
  setIsSubmittingContact(true);
  const newMessage = {
    name: contactForm.name,
    email: contactForm.email,
    message: contactForm.message,
    timestamp: new Date().toISOString(),
    status: 'unread'
  };
  
  try {
    await addDoc(collection(db, "messages"), newMessage);
    toast.success(t("successMessage"));
    setContactForm({ name: '', email: '', message: '' });
  } catch (error) {
    toast.error("Error sending message!");
    console.error(error);
    console.error("error");
  }
  setIsSubmittingContact(false);
};

  // Handle photo upload  الي بتهندل الصورهfunction ال 
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCommentForm(prev => ({
          ...prev,
          photo: file,
          photoPreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle comment submit  بتاع اترك تعليقform  الي بتهندل ال 
  const handleCommentSubmit = async  (e) => {
     e.preventDefault();
  if (!commentForm.name.trim() || !commentForm.message.trim()) return;

  setIsSubmittingComment(true);

  const newComment = {
    name: commentForm.name,
    message: commentForm.message,
    photo: commentForm.photoPreview || `https://ui-avatars.com/api/?name=${encodeURIComponent(commentForm.name)}&background=00ffdc&color=000754&size=100`,
    timestamp: new Date().toISOString(),
    likes: 0
  };

  try {
    await addDoc(collection(db, "comments"), newComment);
    toast.success("Comment added!");
    setCommentForm({ name: '', message: '', photo: null, photoPreview: null });
    fetchComments(); // بعد الإضافة، هنجدد القائمة
  } catch (error) {
    toast.error("Error adding comment!");
    console.error(error);
  }

  setIsSubmittingComment(false);
  };
  

  // جلب التعليقات من Firestore
const fetchComments = async () => {
  const querySnapshot = await getDocs(collection(db, "comments"));
  const commentsData = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  setComments(commentsData);
};

// تحميل التعليقات عند الفتح
useEffect(() => {
  fetchComments();
}, []);

  // Handle like comment بتهندل القلب بتاع التعليق 
  const handleLikeComment = async (commentId) => {
    const commentRef = doc(db, "comments", commentId);
    await updateDoc(commentRef, {
      likes: increment(1) // تزود لايك واحد
    });
};

  // Handle like comment بتهندل القلب بتاع التعليق 
useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, "comments"), (snapshot) => {
    const commentsData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setComments(commentsData);
  });

  return () => unsubscribe(); // عشان توقف التحديث لما الكمبوننت يتشال
}, []);

// االسوشيل ميديا 
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Abdelazemelwan1',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:shadow-gray-500/25'
    },
    {
      name: 'Linkedin',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/abdelazem-elwan-904619252',
      color: 'from-[#0A66C2] to-[#004182]',
      hoverColor: 'hover:shadow-[#0A66C2]/25'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/abdelazem_elwan?igsh=ZzlsZjc5dDY3aXNp&utm_source=qr',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:shadow-pink-500/25'
    },
    {
      name: 'Facebook',
      icon: <SiFacebook />,
      url: 'https://www.facebook.com/abdelazem.elwan.9/',
      color: 'from-[#0A65C0] to-[#0866FF]',
      hoverColor: 'hover:shadow-[#0A65C0]/25'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-cyan-900/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title  GET IN TOUCH تواصل معي */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center mb-20 relative" >
          <h2 className="text-[38px]  md:text-7xl font-bold font-moderniz mb-4 ">
            {i18n.language == "en" ?(<>
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              {t('get')}
            </span>
            {' '}
            <span className="text-white">{t('touch')}</span></> ): 
            (<>
            <span className="text-white">{t('touch')}</span>
              {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              {t('get')}
            </span></> )
            }
          </h2>
          <p className="text-xl text-slate-400 font-cascadia">
          {t("collaborate")}

          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Form & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Contact Form اتصـــل بــــي */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
              {/* اتصـــل بــــي  Contact Me*/}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full">
                    <FaPaperPlane className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white text-start">{t("call")}</h3>
                    <p className="text-slate-400">{t("message")}</p>
                  </div>
                </div>
                {/* اتصـــل بــــي  Contact Me <== form   ال */}
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="group">
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
                      <input
                        type="text"
                        placeholder={t("Yourname")} 
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
                      <input
                        type="email"
                        placeholder={t("email")}
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <div className="relative">
                      <FaComment className="absolute left-4 top-6 text-slate-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
                      <textarea
                        placeholder={t("messageInput")}
                        rows="4"
                        value={contactForm.message}
                        onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmittingContact}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer w-full bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50"
                  >
                    {isSubmittingContact ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>{t("sendButton")}</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>

            {/* أو or  ال  */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
              <span className="text-slate-400 font-semibold">{t("or")}</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
            </div>

            {/* Social Media Acconted */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{t("connect")}</h3>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className={`group flex items-center gap-4 p-4 bg-gradient-to-r ${social.color} rounded-xl text-white transition-all duration-300 ${social.hoverColor} hover:shadow-xl`}
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold">{social.name}</span>
                        <p className="text-sm opacity-90">Follow me on {social.name}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FaReply className="rotate-180" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Comments System */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-8">
            {/* Comment Form اترك تعليق */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
              {/* اترك تعليق  */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full">
                    <FaComment className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{t("leaveComment")}</h3>
                    <p className="text-slate-400">{t("shareThoughts")}</p>
                  </div>
                </div>

                {/*بتاع اترك تعليق  form  ال  */}
                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* الجزء بتاع الصورة */}
                    <div className="flex-shrink-0 text-center m-a uto">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden">
                          {commentForm.photoPreview ? (
                            <img src={commentForm.photoPreview} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                              <FaCamera />
                            </div>
                          )}
                        </div>
                        <label className={`absolute -bottom-2  ${i18n.language == "en" ? "md:-right-2 left-10"  : "right-10"} bg-cyan-600 text-white p-2 rounded-full cursor-pointer hover:bg-cyan-500 transition-colors duration-300`}>
                          <FaCamera className="text-sm" />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <input
                        type="text"
                        placeholder={t("Yourname")}
                        value={commentForm.name}
                        onChange={(e) => setCommentForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                        required
                      />
                      <textarea
                        placeholder={t("writeComment")}
                        rows="3"
                        value={commentForm.message}
                        onChange={(e) => setCommentForm(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmittingComment}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50"
                  >
                    {isSubmittingComment ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <FaComment />
                        <span>{t("postComment")}</span>
                      </>
                    )}
                  </motion.button>
                </form>

              </div>
            </div>

            {/* Comments Display عرض الكومنت الي هعملو*/}
            <div className="space-y-4">
              {/* عدد التعليقات */}
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <FaComment className="text-cyan-400" />
                {t("comments")} ({comments.length})
              </h4>
              {/* التعليق */}
              <div className={`space-y-4 max-h-96 overflow-y-auto  ${Style['custom-scrollbar']}`}>
                <AnimatePresence>
                  {comments.map((comment, index) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, x: -100 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className="flex gap-4">
                        <img 
                          src={comment.photo} 
                          alt={comment.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-slate-600"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h5 className="font-semibold text-white">{comment.name}</h5>
                              <p className="text-xs text-slate-400">
                              {new Date(comment.timestamp).toLocaleDateString(i18n.language, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                              </p>
                            </div>
                          </div>
                          <p className="text-slate-300 mt-2 leading-relaxed">{comment.message}</p>
                          <div className="flex items-center gap-4 mt-4">
                            <button
                              onClick={() => handleLikeComment(comment.id)}
                              className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors duration-300 group/like"
                            >
                              <FaHeart className="group-hover/like:scale-110 transition-transform duration-300" />
                              <span className="text-sm">{comment.likes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {/* لو مفيش تعليقات لسا */}
                {comments.length === 0 && (
                  <div className="text-center py-12 text-slate-400">
                    <FaComment className="text-4xl mx-auto mb-4 opacity-50" />
                    <p>{t("noComments")}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      {/* <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #10b981);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #059669);
        }
      `}</style> */}
    </section>
  );
};

export default Contact;
