import style from '@/styles/pages/login.module.css';
import StudyBarterLogo from '@/components/svg/StudyBarterLogo';
import GoogleLogo from '@/public/svg/Google__G__logo.svg';
import Image from 'next/image';
export default function Login() {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
            <div>
                <StudyBarterLogo height={'180'} width={'180'} fill={'#121111'}/>
            </div>
            <div className={style.authorize_by}>
                <div className={style.btn}>
                    <Image src={GoogleLogo}></Image>
                    Log in With Google
                </div>
            </div>
            <form className={style.formContainer}>
                <div className={style.formContainerElement}>
                    <label className={style.formContainerElementLabel}>
                        Email
                    </label>
                    <input className={style.formContainerElementInput}>
                    </input>
                </div>
                <div className={style.formContainerElement}>
                    <label className={style.formContainerElementLabel}>
                        Password
                    </label>
                    <input>
                    </input>
                </div>
                <div className={style.formContainerElement}>
                    <div className={style.btnLogin}>Log in</div>
                </div>
            </form>
        </div>
      </div>
    </>
  );
}