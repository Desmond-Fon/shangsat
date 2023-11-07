
// eslint-disable-next-line react/prop-types
const TeamMembers = ({ memberImage, memberName, desc }) => {
  return (
    <div className="w-[250px] rounded-[5px] border-[1px] border-[#E2E8F0]">
      <img src={memberImage} alt="" className='rounded-t-[5px] w-full h-[270px] object-fit' />
      <div className="grid place-items-left gap-[3px] text-left w-full p-[28px] h-[150px]">
        <p className='font-anton text-[20px] text-darkText text-left'>{memberName}</p>
        <p className='font-poppins text-[15px] pt-[16px] text-darkText'>{desc}</p>
      </div>
    </div>
  );
}

export default TeamMembers;