const Wailist = () => {

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <div className="text-center flex flex-col items-center justify-center">
          <p className="flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg></p>
          <h1 className="mt-4 text-2xl font-bold">Demande envoyée !</h1>
          <p className="mt-2 text-gray-600">
            Nous avons reçu votre candidature et nous allons l'examiner sous peu.
          </p>
  
          <div className="mt-8 card flex flex-col items-center border-2 p-4 rounded-lg shadow-md w-full max-w-md">
            <div className="flex items-center">
              <span className="mr-2 text-lg font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>            </span>
              <span className="text-gray-600">
                Pour accélérer le processus de candidature, veuillez nous suivre sur instagram.{" "}
                <a href="https://instagram.com/tunisianpass" className="font-bold text-black">
                  @tunisianpass
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Wailist;
  