// import team from '../assets/team.png'
import muhammad from '../assets/img1.jpeg'
import umar from '../assets/img2.jpeg'
import elizabeth from '../assets/img3.jpeg'
import sandra from '../assets/img4.jpeg'
import amina from '../assets/amina.jpeg'
import benjamin from '../assets/benjamin.jpeg'
import bitrus from '../assets/bitrus.jpeg'
import caring from '../assets/caring.jpeg'
import deborah from '../assets/deborah.jpeg'
import dorcas from '../assets/dorcas.jpeg'
import esther from '../assets/esther.jpeg'
import guyit from '../assets/guyit.jpeg'
import joshua from '../assets/joshua.jpeg'
import lucky from '../assets/lucky.jpeg'
import nandi from '../assets/nandi.jpeg'
import nanfwang from '../assets/nanfwang.jpeg'
import nathaniel from '../assets/nathaniel.jpeg'
import rapheal from '../assets/rapheal.jpeg'
import shebum from '../assets/shebum.jpeg'
import solomon from '../assets/solomon.jpeg'
import tapkor from '../assets/tapkor.jpeg'
import wisdom from '../assets/wisdom.jpeg'
import arrow from '../assets/arrow-right.png'
import { Link } from 'react-router-dom'
import TeamMembers from './TeamMembers'



// eslint-disable-next-line react/prop-types
const Team = ({show}) => {
    return (<div className='flex justify-between items-center flex-col lg:px-[80px] pt-[48px] p-[16px] pb-[48px] gap-[60px]'>
        <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
            <h1 className='font-anton text-darkText text-[32px] lg:text-[50px]'>Meet The Team</h1>

            {!show && <Link to={'/about'}>
                <div className='flex justify-start items-center gap-[16px] mt-[12px] lg:mt-[36px]'>
                    <p className='font-roboto font-[500] text-org '>More</p>
                    <img src={arrow} alt="" />
                </div>
            </Link>}
        </div>

        <div className='flex flex-col gap-10'>
            <div>
                {show && <h1 className='font-anton text-darkText text-center lg:text-left mb-5 text-[24px] lg:text-[32px]'>Board of Directors</h1>}
                <div className='flex justify-center lg:justify-between flex-wrap items-center w-full gap-[24px]'>
                    <TeamMembers memberImage={caring} memberName='Caring Simon Gwanshak' desc='Head of Board'/>
                    <TeamMembers memberImage={umar} memberName='Simon Arduhur ' desc='Board Member'/>
                    <TeamMembers memberImage={elizabeth} memberName='Naomi Simon' desc='Board Member' />
                    <TeamMembers memberImage={sandra} memberName='Trust Simon Gwanshak' desc='Board Member' />
                </div>
            </div>

            {show &&<div>
                {show && <h1 className='font-anton text-darkText text-center lg:text-left mb-5 text-[24px] lg:text-[32px]'>Executives</h1>}
                <div className='flex justify-center lg:justify-between flex-wrap items-start w-full gap-[24px]'>
                    <TeamMembers memberImage={caring} memberName='Caring Simon Gwanshak' desc='Head of Board'/>
                    <TeamMembers memberImage={umar} memberName='Bashir Rabiu Mustapha' desc='Chief Operations Officer'/>
                    <TeamMembers memberImage={umar} memberName='Umar Dili' desc='Head of Property, Warehousing & Logistics' />
                    <TeamMembers memberImage={shebum} memberName='Shebum Johnmark' desc='Head of Office & Export Operations' />
                </div>
            </div>}

            {show &&<div>
                {show && <h1 className='font-anton text-darkText text-center lg:text-left mb-5 text-[24px] lg:text-[32px]'>Staff Members</h1>}
                <div className='flex justify-center lg:justify-center flex-wrap items-start w-full gap-[24px]'>
                    <TeamMembers memberImage={muhammad} memberName='Muhammad Usman' desc='Legals'/>
                    <TeamMembers memberImage={bitrus} memberName='Bitrus Ndel Maki' desc='Staff'/>
                    <TeamMembers memberImage={tapkor} memberName='Tapkor Shem' desc='Staff' />
                    <TeamMembers memberImage={benjamin} memberName='Benjamin Friday Dantala' desc='Staff' />
                    <TeamMembers memberImage={esther} memberName='Esther Ayomide' desc='Staff'/>
                    <TeamMembers memberImage={guyit} memberName='Joshua Guyit' desc='Staff' />
                    <TeamMembers memberImage={lucky} memberName='Lucky Bulus' desc='Staff' />
                    <TeamMembers memberImage={nandi} memberName='Nandi Veronica Habila' desc='Staff'/>
                    <TeamMembers memberImage={dorcas} memberName='Dorcas Bitrus' desc='Staff' />
                    <TeamMembers memberImage={nanfwang} memberName='Nanfwang Bitrus' desc='Staff' />
                    <TeamMembers memberImage={deborah} memberName='Deborah Mandabs' desc='Staff'/>
                    <TeamMembers memberImage={amina} memberName='Amina Mustapha' desc='Staff' />
                    <TeamMembers memberImage={wisdom} memberName='Wisdom Clement' desc='Staff' />
                     <TeamMembers memberImage={sandra} memberName='Sandra Kungur' desc='Staff' />
                    <TeamMembers memberImage={elizabeth} memberName='Elizabeth Silas Ding' desc='Staff' />
                    <TeamMembers memberImage={solomon} memberName='Solomon Yelgit Ishaya' desc='Staff' />
                    <TeamMembers memberImage={joshua} memberName='Joshua Silas Ding' desc='Staff'/>
                    <TeamMembers memberImage={nathaniel} memberName='Nathaniel Nengi' desc='Staff' />
                    <TeamMembers memberImage={rapheal} memberName='Rapheal Bunu Adamu' desc='Staff' />
                </div>
            </div>}
        </div>
    </div>);
}

export default Team;