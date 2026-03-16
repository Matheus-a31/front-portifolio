import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createProject } from '@/services/api';

export default function AdminDashboard() {

  async function handleSubmit(formData: FormData) {
    'use server';
    
    const token = (await cookies()).get('admin_token')?.value;
    if (!token) redirect('/admin/login');

    const projectData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      githubUrl: formData.get('githubUrl') as string,
      deployUrl: formData.get('deployUrl') as string,
      imageUrl: formData.get('imageUrl') as string,
    };

    try {
      await createProject(projectData, token);
      redirect('/#projetos'); 
    } catch (error) {
      console.error("Erro ao salvar o projeto:", error);
    }
  }

  async function logout() {
    'use server';
    (await cookies()).delete('admin_token');
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Novo Projeto</h1>
          <form action={logout}>
            <button className="text-red-600 font-medium hover:underline">Sair</button>
          </form>
        </div>

        <form action={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">Título</label>
            <input type="text" name="title" placeholder="Digite o título do projeto" required className="w-full mt-1 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Descrição</label>
            <textarea name="description" placeholder="Digite a descrição do projeto" rows={4} required className="w-full mt-1 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">URL do GitHub (Opcional)</label>
              <input type="url" name="githubUrl" placeholder="https://github.com/..." className="w-full mt-1 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">URL do Deploy (Opcional)</label>
              <input type="url" name="deployUrl" placeholder="https://exemplo.com" className="w-full mt-1 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">URL da Imagem de Capa</label>
            <input type="url" name="imageUrl" placeholder="https://exemplo.com/imagem.jpg" className="w-full mt-1 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Salvar no Banco de Dados
          </button>
        </form>
      </div>
    </div>
  );
}