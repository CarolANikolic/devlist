import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import ProjectItem from '../../components/ProjectItem'
import ProjectListItem from '../../components/ProjectListItem'
import AddProjectForm from '../../components/AddProjectForm'
import Heading from '../../components/Heading'
import ParagraphBlock from '../../components/ParagraphBlock'
import lightbulb from '../../img/icons/lightbulb.png'
import { ReactComponent as Line } from '../../img/icons/line.svg'
import { useState } from 'react'
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"
import { useCardCalc } from "../../common/utils/functions/useCardCalc"
import arrowCircle from '../../img/icons/arrow-circle.png'

const Projects = () => {

    const [btnAdd, setBtnAdd] = useState(false)
    const cardData = useCardCalc()


    return (
        <main className='grid grid-flow-row container-bigger'>
            <section className='container-small pt-6 md:pt-0'>

                <Heading type='headingOne' line="left" headingOneContent="My dashboard" />
                <div className='grid grid-flow-row gap-5 py-6'>
                    <div className='flex flex-row justify-between items-center md:max-w-[400px]'>
                        <Heading type='headingTwo' headingTwoContent="Add a new project" />
                        <button className='w-10 h-10' onClick={() => setBtnAdd(!btnAdd)}>
                            <Line className='w-10' />
                            <Line className={`w-10 transition-all duration-500 ease-in-out ${!btnAdd ? 'rotate-90' : 'opacity-0'}`} />
                        </button>
                    </div>
                        <div className='flex flex-row gap-4 items-center bg-grayish rounded-md md:max-w-[450px]'>
                            <img src={lightbulb} alt="lightbulb icon" className='max-w-12 max-h-12' />
                            <ParagraphBlock paragraphContent="DevNote count the invested time based on your project work status. Remember to change the status of your project." />
                        </div>

                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${!btnAdd ? 'max-h-0' : 'max-h-full'}`}><AddProjectForm /></div>
            </section>
            <section className='flex flex-col container-small'>
                <div className='max-w-full grid grid-flow-row gap-8 py-3 xl:max-h-72 md:py-6 md:grid-cols-2 xl:grid-cols-4'>
                    <ProjectCard title='Ongoing' icon={arrowCircle} alt='arrow circle icon' content={`${cardData.active} projects`} footer='Open projects' fromColor='from-amber-400' toColor='to-amber-200' />
                    <ProjectCard title='Closed' icon={regular('circle-check')} content={`${cardData.closed} projects`} footer='Closed and achieved projects' fromColor='from-lime-600' toColor='to-amber-200' />
                    <ProjectCard title='Total time' icon={regular('clock')} content={`${cardData.daysTotal} days`} footer='Invested in all projects' fromColor='from-lime-300' toColor='to-sky-500' />
                    <ProjectCard title='Remaining time' icon={regular('hourglass')} content='sample' footer='Until all projects deadlines' fromColor='from-red-500' toColor='to-amber-200' />
                </div>

                <div className='w-full px-3 mt-10 pb-20 md:mt-0 md:px-6 m-auto bg-slate-200'>
                    <ProjectItem project='Project' client='Client' start='Start date' deadline='Deadline' indicator='Status' />
                    <ProjectListItem />
                </div>
            </section>
        </main>
    )


}

export default Projects