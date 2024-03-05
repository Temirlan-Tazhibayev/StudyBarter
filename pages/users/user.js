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
                        <div className={style.profileView}>
                            <Image src={"/png/default-user-image.png"} width={100} height={100}></Image>
                        </div>
                        <div className={style.userdata}>
                            <div className={style.userNameFont}>Name Surename</div>
                            <ul class={style.userLastSeen}>
                                <li class="flex--item">
                                    <div class="d-flex gs4 gsx ai-center">
                                        <div class="flex--item fc-black-350">
                                            <svg aria-hidden="true" class="svg-icon iconCake" width="18" height="18" viewBox="0 0 18 18"><path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z"></path></svg>
                                        </div>
                                        <div class="flex--item">
                                            Member for <span title="2024-01-28 13:47:22Z">38 days</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="flex--item">
                                    <div class="d-flex gs4 gsx ai-center">
                                        <div class="flex--item fc-black-350">
                                            <svg aria-hidden="true" class="svg-icon iconClock" width="18" height="18" viewBox="0 0 18 18"><path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8Zm0-2c3.27 0 6-2.73 6-6s-2.73-6-6-6-6 2.73-6 6 2.73 6 6 6ZM8 5h1.01L9 9.36l3.22 2.1-.6.93L8 10V5Z"></path></svg>
                                        </div>
                                        <div class="flex--item">
                                            Last seen this week
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className={style.mainbarNav}>
                        <a href='' className={style.mainbarNavElement}>Activity</a>
                        <a href='' className={style.mainbarNavElement}>Settings</a>                        
                    </div>
                    <div className={style.mainbarBody}>
                        <h2>Summary</h2>
                        <div className={style.mainbarBodySummary} style={{ gap: '2%' }}>
                            

                            <div className={style.mainbarBodySummaryEl}>
                                <div className={style.mainbarBodySummarySort}>
                                    <div className={style.mainbarBodySummaryElHeader}>
                                        <div className={style.fontType}>Answers</div>
                                    </div>
                                    <div className={style.mainbarNavSort}>
                                        <a href="#" className={style.mainbarNavElement}>Score</a>
                                        <a href="#" className={style.mainbarNavElement}>Activity</a>
                                        <a href="#" className={style.mainbarNavElement}>Newest</a>
                                    </div>
                                </div>
                                <div className={style.mainbarBodySummaryElBody}>
                                    <div>You have not answered questions yet</div>
                                </div>
                            </div>
                            <div className={style.mainbarBodySummaryEl}>
                                <div className={style.mainbarBodySummarySort}>
                                    <div className={style.mainbarBodySummaryElHeader}>
                                        <div className={style.fontType}>Questions</div>
                                    </div>
                                    <div className={style.mainbarNavSort}>
                                        <a href="#" className={style.mainbarNavElement}>Score</a>
                                        <a href="#" className={style.mainbarNavElement}>Activity</a>
                                        <a href="#" className={style.mainbarNavElement}>Newest</a>
                                        <a href="#" className={style.mainbarNavElement}>Views</a>
                                    </div>
                                </div>
                                <div className={style.mainbarBodySummaryElBody}>
                                    <div>You have not asked any questions</div>
                                </div>
                            </div>
                            <div className={style.mainbarBodySummaryEl}>
                                <div className={style.mainbarBodySummaryElHeader}>
                                    <div className={style.fontType}>Tags</div>
                                </div>
                                <div className={style.mainbarBodySummaryElBody}>
                                    <div>You have not participated in any tags</div>
                                </div>
                            </div>
                            
                            <div className={style.mainbarBodySummaryEl}>
                                <div className={style.mainbarBodySummaryElHeader}>
                                    <div className={style.fontType}>Reputation</div>
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