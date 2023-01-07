import React from 'react'
import heroImageHome from '../../img/home/hero-img.png'
import ongoingIcon from '../../img/icons/ongoing-icon.png'
import doneIcon from '../../img/icons/done-icon.png'
import totalTimeIcon from '../../img/icons/total-time-icon.png'
import remainingTimeIcon from '../../img/icons/remaining-icon.png'

const Home = () => {
    return (
        <main className='min-h-[100vh]'>
            <section>
                <div>
                    <h1>DevNote</h1>
                    <p>The ultimate <span>FREE </span><span>developer</span> tool to keep track of your projects</p>
                    <input type="email" placeholder="email"></input>
                    <button type="button">Register</button>
                </div>

                <div>
                    <img src={heroImageHome} alt="decorative Devnote features"/>
                </div>
            </section>

            <section>
                <div>
                    <h2>Track your <span>projects</span>. Manage your <span>time</span>. Get things <span>done</span>!</h2>
                    <p>DevNote helps you keep things simple, efficient and organized.</p>
                </div>

                <div>
                    <div>
                        <img src={ongoingIcon} alt="ongoing projects"/>
                        <h3>Track ongoing projects</h3>
                        <p>Help you keep your focus on the current project.</p>
                    </div>

                    <div>
                        <img src={doneIcon} alt="done projects"/>
                        <h3>Organize your projects</h3>
                        <p>Easily access and visualize your done projects. </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home