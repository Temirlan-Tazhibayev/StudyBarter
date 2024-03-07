import style from '@/styles/pages/users.module.css';

import StudyBarterLogo from '@/components/svg/StudyBarterLogo';
import GoogleLogo from '@/public/svg/Google__G__logo.svg';
import Image from 'next/image';
import LeftSidebar from '@/components/navigation/LeftSidebar';

import React, { useState }  from 'react';
import SortButtons from '@/components/a/SortButtons';
export default function User() {

    const [activeTab, setActiveTab] = useState('Activity');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const [settingTab, setSettingTab] = useState('PersonalInformation');
    const handleSettingTabChange = (tab) => {
        setSettingTab(tab);
    } 

    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleDeleteProfile = () => {
        if (isConfirmed) {
            
            

            console.log("Deleting profile...");
        } else {
            alert("Please confirm that you understand the implications.");
        }
    };

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
                            <a className={activeTab === 'Activity' ? `${style.mainbarNavElement} ${style.active}` : style.mainbarNavElement} onClick={() => handleTabChange('Activity')}>Activity</a>
                            <a className={activeTab === 'Settings' ? `${style.mainbarNavElement} ${style.active}` : style.mainbarNavElement} onClick={() => handleTabChange('Settings')}>Settings</a>                        
                        </div>

                        <div className={style.mainbarBody}>
                            {activeTab === 'Activity' && (
                                <>
                                    <div className={style.mainbarBodySummary} style={{ gap: '2%' }}>
                                        <div className={style.mainbarBodySummaryEl}>
                                            <div className={style.mainbarBodySummarySort}>
                                                <div className={style.mainbarBodySummaryElHeader}>
                                                    <div className={style.fontType}>Answers</div>
                                                </div>
                                                <SortButtons/>
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
                                                <SortButtons/>
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
                                </>
                            )}
                            {activeTab === 'Settings' && (
                                <>
                                    <nav className={style.SettingsNav}>
                                        <ul>
                                            <li className={style.SettingsNavElement}>PERSONAL INFORMATION</li>
                                            <li className={style.SettingsNavElement}>
                                                <a className={settingTab === 'EditProfile' ? `${style.SettingsNavElementButton} ${style.active}` : style.SettingsNavElementButton} onClick={() => handleSettingTabChange('EditProfile')}>Edit Profile Settings</a>
                                            
                                            </li>
                                            <li className={style.SettingsNavElement}>
                                                <a className={settingTab === 'EditEmail' ? `${style.SettingsNavElementButton} ${style.active}` : style.SettingsNavElementButton} onClick={() => handleSettingTabChange('EditEmail')}>Edit Email Settings</a>
                                            </li>
                                            <li className={style.SettingsNavElement}>
                                                <a className={settingTab === 'DeleteProfile' ? `${style.SettingsNavElementButton} ${style.active}` : style.SettingsNavElementButton} onClick={() => handleSettingTabChange('DeleteProfile')}>Delete Profile</a>

                                            </li>
                                        </ul>
                                    </nav>
                                    <div className={style.SettingsBody}>
                                        {settingTab === 'EditProfile' && (
                                            <>
                                                <h2 className={style.sheader}>Edit you profile</h2>
                                                <div className={style.sbody}>
                                                    <div className={style.sbodyElement}>
                                                        Profile image
                                                    </div>
                                                    <div className={style.sbodyElement}>
                                                        Display Name
                                                        <input></input>
                                                    </div>
                                                    <div className={style.sbodyElement}>
                                                        Title
                                                        <input></input>
                                                    </div>
                                                    <div className={style.sbodyElement}>
                                                        About Me
                                                        <input></input>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {settingTab === 'EditEmail' && (
                                            <>
                                                <h2 className={style.sheader}>Edit Email</h2>
                                                <div className={style.sbody}>
                                                    <div className={style.sbodyElement}>
                                                        <div className={style.sbodyElement}>
                                                            Mail
                                                            <input></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {settingTab === 'DeleteProfile' && (
                                            <>
                                                <h2 className={style.sheader}>Delete Profile</h2>
                                                <hr/>
                                                <div className={style.sbody}>
                                                    <p>Before confirming that you would like your profile deleted, we'd like to take a moment to explain the implications of deletion:</p>

                                                    <p>Deletion is irreversible, and you will have no way to regain any of your original content, should this deletion be carried out and you change your mind later on.</p>
                                                    <p>Your questions and answers will remain on the site, but will be disassociated and anonymized (the author will be listed as "user23264375") and will not indicate your authorship even if you later return to the site.</p>
                                                
                                                    <p>Confirming deletion will only delete your profile on Stack Overflow - it will not affect any of your other profiles on the Stack Exchange network. If you want to delete multiple profiles, you'll need to visit each site separately and request deletion of those individual profiles.</p>

                                                    <label>
                                                            <input type="checkbox" required onChange={() => setIsConfirmed(!isConfirmed)} />

                                                            I have read the information stated above and understand the implications of having my profile deleted. I wish to proceed with the deletion of my profile.
                                                    </label>
                                                    
                                                    <button className={style.deleteaccount} onClick={handleDeleteProfile}>Delete Profile</button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}