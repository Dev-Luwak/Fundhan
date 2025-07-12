function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">Login to Fundhan</h2>
        <form>
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input mt-4" />
          <button className="btn-primary mt-6 w-full">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
