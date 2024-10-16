
export default function Home() {
  return (
    <div>

      <div className="bg-background">
        <h1 className="text-6xl text-center pt-2 text-primary-background">MRJUSTIZZY</h1>
      </div>
      <div className="relative h-[40rem] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white text-center">
            Welcome to Our Video Background
          </h1>
        </div>
      </div>
    </div>
  );
}
