import Image from 'next/image';
import Task from '../components/task';
import Add from '../components/add';
import Cinnamoroll from '../../public/images/cinnamoroll.png';

export default function Home() {
  return (
    <main className="grid place-content-center my-12 gap-6">
      <span className="text-[#685E52] text-2xl flex flex-row items-center justify-start gap-2">
        Date:
        <h1 className="text-[#685E52]/80">
          {new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}
        </h1>
      </span>
      <section className="rounded-xl shadow-lg shadow-[#758FB9]/30 bg-slate-50 px-auto lg:px-20 h-full pb-20">
        <article className="flex flex-row gap-12 justify-between items-center">
          <Image
            className="w-64 h-64 object-cover"
            src={Cinnamoroll}
            alt="cinnamoroll"
          />
          <span className="text-7xl flex flex-col justify-center items-center">
            <h1 className="text-[#758FB9]">TO DO</h1>
            <h1 className="tracking-wider text-[#758FB9]">list</h1>
          </span>
        </article>
        <div className="flex justify-end items-center pb-2">
          <Add />
        </div>
        <div className="flex flex-col gap-8 border-[#758FB9]/30 border-2 rounded border-dashed p-6">
          <Task text="Comprar leche" />
          <Task text="Comprar huevos" />
          <Task text="Comprar agua" />
          <Task text="Comprar avena" />
          <Task text="Comprar yogurt" />
        </div>
      </section>
    </main>
  );
}
