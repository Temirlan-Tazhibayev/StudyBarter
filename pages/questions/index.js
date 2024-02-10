import LeftSidebar from '@/components/LeftSidebar';



export default function Questions({ questions }) {

  return (
    <>
      <div className='container'>
        <LeftSidebar/>
        <div className='content'>
          
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    // Отправка GET-запроса к вашему API маршруту
    const response = await fetch('http://localhost:3000/api/questions');
    const questions = await response.json(); // Преобразование ответа в JSON

    return { props: { questions } };
  } catch (error) {
    console.error(error);
    return { props: { questions: [] } }; // Возвращение пустого массива в случае ошибки
  }
}
