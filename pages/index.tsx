import type { NextPage } from 'next';
import Counter from '../components/Counter';

const Home: NextPage = () => {
  return (
    <div className='bg-primary min-h-screen'>
      <div>dfdsa</div>
      {/* <Header /> */}
      <main className='w-11/12 mx-auto max-w-[33rem]'>
        {/* <CurrentTask /> */}
        <Counter />
        {/* <Tasks /> */}
      </main>
    </div>
  );
};

export default Home;
