const teamPhoto = [
  {
    name: "Leo Kris",
    role: "teacher",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Leo Kris",
    role: "teacher",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Leo Kris",
    role: "teacher",
    imageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Leo Kris",
    role: "teacher",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Leo Kris",
    role: "teacher",
    imageSrc:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function TeamPhoto() {
  return (
    <div>
      <div className="flex justify-between w-[1318px]">
        {teamPhoto.map((person, idx) => (
          <div key={idx} className="flex flex-col items-center gap-5">
            <div className="w-[223px] h-[223px] rounded-full bg-slate-300">
              <img
                src={person.imageSrc}
                alt="person"
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <div className="text-center">
              <h1 className="text-[14px] font-bold tracking-wide capitalize">
                {person.name}
              </h1>
              <h1 className="text-[14px] tracking-wide capitalize">
                {person.role}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
