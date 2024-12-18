import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/header';
// import styles from '@styles/home.module.css';
import { useTranslation } from 'next-i18next';

const Home: React.FC = () => {
  const {t} = useTranslation();
  return (
    <>
      <Head>
      <title>{t("app.title")}</title>
      </Head>
      <Header />
     
        <span>
          <Image
            src="/images/courses.png"
            alt="Courses Logo"
            
            width={50}
            height={50}
          />
          <h1>Welcome!</h1>
        </span>

        
          <p>
            Courses lets you see as a lecturer all the courses you are teaching
            and as a student all the courses you are enrolled in. <br />
            You can also see when the courses are scheduled and the students
            enrolled in each course.
          </p>
        
     
    </>
  );
};

export default Home;
