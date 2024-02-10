import LeftSidebar from '@/components/LeftSidebar';

import Posts from '@/components/Posts';

export default function Questions({ questions }) {

  return (
    <>
      <div className='container'>
        <LeftSidebar/>
        <div className='content'>
          <Posts questions={questions}/>
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps(context) {
    try {
        const { tab } = context.query;

        if (tab){
            const response = await fetch(`http://localhost:3000/api/questions?tab=${encodeURIComponent(tab)}`);
            const questions = await response.json();
        console.log(questions)
        return { props: { questions } };
        } else {
            const response = await fetch('http://localhost:3000/api/questions');
            const questions = await response.json(); // Преобразование ответа в JSON

            return { props: { questions } };
        }

    // const searchText = query.searchText || '';
    } catch (error) {
      console.log(error)
      return { props: { questions: [] } };
    } 
  }