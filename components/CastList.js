import Link from "next/link";

export default function CastList({cast}){
  return (
    <div>
     {cast.map( member => (
      
      <Link 
          href="/member/[id]" 
          as={`/member/${member.id}`} 
          key={member.id}>
     <p>{member.name}</p>
     </Link>
     ))}
     </div>
  )
}

// 43