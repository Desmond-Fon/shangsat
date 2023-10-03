import team from '../assets/team.png'
import arrow from '../assets/arrow-right.png'
import { Link } from 'react-router-dom'
import TeamMembers from './TeamMembers'



const Team = () => {
    return (<div className='flex justify-between items-center flex-col lg:px-[80px] pt-[48px] p-[16px] pb-[48px] gap-[60px]'>
        <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
            <h1 className='font-anton text-darkText text-[32px] lg:text-[50px]'>Meet The Team</h1>

            <Link to={'/about'}>
                <div className='flex justify-start items-center gap-[16px] mt-[12px] lg:mt-[36px]'>
                    <p className='font-roboto font-[500] text-org '>More</p>
                    <img src={arrow} alt="" />
                </div>
            </Link>
        </div>

        <div className='flex justify-center lg:justify-between flex-wrap items-center w-full gap-[24px]'>
            <TeamMembers memberImage={team} memberName='Congue velit risus' desc='Nunc gravida semper tellus neque scelerisque eget tincidunt in.'/>
            <TeamMembers memberImage={team} memberName='Congue velit risus' desc='Nunc gravida semper tellus neque scelerisque eget tincidunt in.'/>
            <TeamMembers memberImage={team} memberName='Congue velit risus' desc='Nunc gravida semper tellus neque scelerisque eget tincidunt in.' />
            <TeamMembers memberImage={team} memberName='Congue velit risus' desc='Nunc gravida semper tellus neque scelerisque eget tincidunt in.' />
        </div>
    </div>);
}

export default Team;