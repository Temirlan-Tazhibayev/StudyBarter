import style from '@/styles/pages/users.module.css';

import StudyBarterLogo from '@/components/svg/StudyBarterLogo';
import GoogleLogo from '@/public/svg/Google__G__logo.svg';
import Image from 'next/image';
import LeftSidebar from '@/components/navigation/LeftSidebar';

export default function User() {
  return (
    <>
        <div className={style.container}>
            <LeftSidebar/>
            <div className={style.content}>
                <div className={style.mainbar}>
                    <div className={style.mainbarHead}>
                        <Image src={"/png/default-user-image.png"} width={100} height={100}></Image>
                        <div className={style.userdata}>
                            <div>Name Surename</div>
                            <ul>
                                <li>Visited X days</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.mainbarNav}>
                        <a href='' className={style.mainbarNavElement}>Activity</a>
                        <a href='' className={style.mainbarNavElement}>Settings</a>                        
                    </div>
                    <div className={style.mainbarBody}>
                        <h2>Summary</h2>
                        <div className={style.mainbarBodySummary}>
                            <div className={style.mainbarBodySummaryEl}>
                                <div className={style.mainbarBodySummaryElHeader}>
                                    <div>Answers</div>
                                </div>
                                <div className={style.mainbarBodySummaryElBody}>
                                    <div>You have not answered questions yet</div>
                                </div>
                            </div>
                            <div className={style.mainbarBodySummaryEl}>
                                <div className={style.mainbarBodySummaryElHeader}>
                                    <div>Tags</div>
                                </div>
                                <div className={style.mainbarBodySummaryElBody}>
                                    <div>You have not participated in any tags</div>
                                </div>
                            </div>
                            <div className={style.mainbarBodySummaryEl}>
                                <div className={style.mainbarBodySummaryElHeader}>
                                    <div>Questions</div>
                                </div>
                                <div className={style.mainbarBodySummaryElBody}>
                                    <div>You have not asked any questions</div>
                                </div>
                            </div>
                            <div className={style.mainbarBodySummaryEl}>
                                <div className={style.mainbarBodySummaryElHeader}>
                                    <div>Reputation</div>
                                </div>
                                <div className={style.mainbarBodySummaryElBody}>
                                    <div>You have no recent reputation changes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}