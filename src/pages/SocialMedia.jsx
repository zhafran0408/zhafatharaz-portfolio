export default function SocialMedia() {
  return (
    <section className="py-24 px-10 bg-white text-center">
      <div className="section-title-box">Contact</div>
      
      <form className="max-w-2xl mx-auto mt-10 space-y-12">
        <input type="text" placeholder="YOUR NAME*" className="input-elegant" />
        <input type="email" placeholder="YOUR EMAIL*" className="input-elegant" />
        <textarea placeholder="MESSAGE*" className="input-elegant h-32"></textarea>
        
        <button className="border-2 border-black px-16 py-4 font-black uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition-all">
          Send Message
        </button>
      </form>

      <div className="mt-24 flex justify-center gap-10 opacity-30 font-black text-sm uppercase italic">
        <a href="#">Github</a>
        <a href="#">Linkedin</a>
        <a href="#">Instagram</a>
      </div>
    </section>
  );
}
