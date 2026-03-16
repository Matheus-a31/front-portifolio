import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function LoginPage() {
  
  async function handleLogin(formData: FormData) {
    'use server'; 
    
    const user = formData.get('user') as string;
    const pass = formData.get('password') as string;
    
    
    const token = Buffer.from(`${user}:${pass}`).toString('base64');
    
    (await cookies()).set('admin_token', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 
    });
    
    redirect('/admin');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <form action={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm border border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">Acesso Restrito</h1>
        
        <div className="mb-4">
          <label htmlFor="user" className="block text-sm font-medium text-slate-700 mb-1">Usuário</label>
          <input id="user" type="text" name="user" placeholder="Digite seu usuário" required className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
          <input id="password" type="password" name="password" placeholder="Digite sua senha" required className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        
        <button type="submit" className="w-full bg-slate-900 text-white font-semibold py-2 rounded-lg hover:bg-slate-800 transition-colors">
          Entrar
        </button>
      </form>
    </div>
  );
}