import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: "ad63acd0-0873-4986-8901-e86cf658edcc", 
        name: data.name,
        email: data.email,
        message: data.message,
        subject: "New Contact Message from Portfolio"
      })
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully!");
      reset();
    } else {
      toast.error("Something went wrong!");
    }
  } catch (error) {
    toast.error("Server error. Please try again.");
  }
};

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss a collaboration? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 flex flex-col h-full "
          >
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] flex-grow flex flex-col justify-between group">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
                <p className="text-slate-400 mb-8">Ready to start your next project? Let's talk.</p>
                
                <div className="space-y-6">
                  <ContactItem 
                    icon={<Mail className="text-cyan-400" />} 
                    label="Email" 
                    value="@amansethiya.dev" 
                    href="mailto:amansethiya.dev@gmail.com"
                  />
                  <ContactItem 
                    icon={<MessageSquare className="text-green-400" />} 
                    label="WhatsApp" 
                    value="+91 86028 58630" 
                    href="https://wa.me/918602858630"
                  />
                  <ContactItem 
                    icon={<MapPin className="text-purple-400" />} 
                    label="Location" 
                    value="Remote / Indore, India" 
                    href="#"
                  />
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800 group-hover:border-slate-700/50 transition-colors">
                <div className="text-slate-400 font-medium mb-4 flex items-center gap-2">
                  Follow me on social media
                  <ArrowUpRight size={16} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 h-full"
          >
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 backdrop-blur-md h-full hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">Name</label>
                  <input 
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-5 py-4 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none text-white transition-all placeholder:text-slate-600 hover:border-slate-700"
                    placeholder="Aman Sethiya"
                  />
                  {errors.name && <span className="text-red-400 text-sm mt-1 ml-1">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">Email</label>
                  <input 
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-5 py-4 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none text-white transition-all placeholder:text-slate-600 hover:border-slate-700"
                    placeholder="amansethiya.dev@gmail.com"
                  />
                  {errors.email && <span className="text-red-400 text-sm mt-1 ml-1">{errors.email.message}</span>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 ml-1">Message</label>
                  <textarea 
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none text-white transition-all placeholder:text-slate-600 resize-none hover:border-slate-700"
                    placeholder="Hey, I'm Developer Aman.
How Can I Help You..."
                  />
                  {errors.message && <span className="text-red-400 text-sm mt-1 ml-1">{errors.message.message}</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a href={href} className="flex items-center gap-5 group p-4 rounded-xl hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-700/50">
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] transition-all duration-300">
        {icon}
      </div>
      <div>
        <div className="text-slate-400 text-sm mb-1 font-medium">{label}</div>
        <div className="text-white text-lg font-bold group-hover:text-cyan-400 transition-colors">{value}</div>
      </div>
    </a>
  );
}
