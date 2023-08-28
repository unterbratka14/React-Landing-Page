import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer">
          <img className="w-20 mx-auto mt-[-3rem]" src={Single} alt="Single" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer">
          <img className="w-20 mx-auto mt-[-3rem]" src={Double} alt="Double" />
          <h2 className="text-2xl font-bold text-center py-8">Two Users</h2>
          <p className="text-center text-4xl font-bold">$349</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1000 GB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 5 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer">
          <img className="w-20 mx-auto mt-[-3rem]" src={Triple} alt="Triple" />
          <h2 className="text-2xl font-bold text-center py-8">Three Users</h2>
          <p className="text-center text-4xl font-bold">$549</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">2000 GB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
