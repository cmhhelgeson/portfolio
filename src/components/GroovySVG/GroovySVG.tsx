import React, {useState} from "react";
import {motion} from "framer-motion"

const TrendyPink: string = "#90619e"
const TrendyGreen: string = "#58895f"
const TrendyRed: string = "#b1423c"
const TrendyBlue: string = "#6398aa"

export const GroovySVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <path
        fill="#333"
        d="M12.463 47.668c0-.084 1.13-1.94 2.5-4.126s2.362-4.025 2.182-4.088-.8.05-1.38.253c-1.745.608-2.104.447-3.407-1.532-1.4-2.142-1.46-2.363-.726-3.175.48-.53.45-.655-.337-1.443-.474-.474-.862-1.005-.862-1.18 0-.294-3.23-1.625-8.337-3.436C.947 28.53 0 28.125 0 28.04s2.446-.105 5.436-.044l5.436.1.53-.837c2.242-3.537 5.63-6.732 7.136-6.732.314 0 .95.3 1.415.665.757.595.86.964.995 3.532.083 1.577.253 2.97.377 3.095s.52-.04.88-.364c.46-.415.942-.528 1.623-.378.705.155 1.108.05 1.477-.4.554-.657 3.325-5.1 3.325-5.33 0-.078.55-1.017 1.22-2.086l1.717-2.74c.486-.778.562-.686 3.484 4.2 3.016 5.056 4.64 6.92 5.452 6.266.567-.457 3.544-.483 4.376-.038.473.253.773.25 1.034-.01.542-.542 1.84-.448 2.18.16.267.478.335.478.732 0 .24-.3.952-.527 1.582-.527.9 0 1.23.185 1.523.83l.378.83 5.846-.207L64 28.008c0 .1-2.387 1.05-5.305 2.135l-5.413 2.045c-.06.04.073 1 .293 2.1.574 2.916.2 4.86-1.243 6.456-.647.716-1.697 1.474-2.333 1.684s-1.157.457-1.157.55.68 1.217 1.5 2.5 1.384 2.333 1.232 2.333c-.25 0-6.302-2.34-15.716-6.072-1.856-.736-3.546-1.338-3.756-1.338-.4 0-3.77 1.28-13.677 5.184-5.745 2.264-5.97 2.342-5.97 2.073zm11.8-5.342L31 39.746c1.115-.397 1.488-.298 6.905 1.843l6.905 2.694c.648.237 1.985.753 2.97 1.145 1.123.448 1.697.556 1.54.3-1.76-2.977-1.814-3.026-3.033-2.798-1.47.276-2.385-.007-2.854-.884-.304-.57-.212-.847.548-1.64 1.13-1.18.953-2.266-.505-3.086-.56-.315-1.265-1.093-1.57-1.73l-.552-1.156-1.182.802c-1.453.986-3.226 1.037-4.706.135l-1.1-.665-1.267.86c-1.27.862-2.73.974-4.215.32-.4-.18-.6-.1-.6.228 0 .268-.386.663-.858.878-1.415.645-2.795.473-3.732-.463l-.853-.854-.7.876c-.38.482-1.256 1.234-1.95 1.67-.858.54-1.92 1.863-3.326 4.14-1.137 1.84-2.067 3.437-2.067 3.552s.872-.16 1.937-.608 4.438-1.788 7.495-2.975zM50.18 41.05c2.32-1.304 2.857-3.715 1.832-8.217-.857-3.762-1.285-4.994-1.792-5.16-.35-.114-.405.01-.207.48 1.284 3.05 1.355 4.58.233 5-.77.296-1.588-.812-2.23-3.023-.498-1.712-1.018-2.484-1.4-2.1-.094.094.07.638.366 1.2s.7 2.3.9 3.82.585 3.133.857 3.56c.706 1.113 1.83.845 2.556-.6.718-1.438.8-.48.1 1.192-.725 1.736-2.88 2.257-5.376 1.3-.4-.153-.535.005-.535.627 0 .458-.306 1.222-.68 1.697l-.68.865.933.158c1.6.272 3.818-.08 5.134-.82zm-33.4-2.87c4.842-1.392 5.707-3.015 4.1-7.7-.373-1.085-.68-2.252-.68-2.594 0-1.163-.585-.626-1.023.94-.58 2.07-2.323 3.83-3.788 3.823-1.272-.006-1.687-.238-2.212-1.236-.943-1.792.085-4.54 2.707-7.24 1.92-1.977 2.97-2.156 2.97-.507 0 2.572-1.773 6.357-2.707 5.78-.457-.282-.383-1.53.148-2.486.45-.814.36-2.054-.152-2.054-.593 0-1.766 2.16-1.92 3.534-.137 1.216-.05 1.512.528 1.822 2.03 1.087 4.7-2.23 4.825-6.015.07-1.988-.314-2.547-1.54-2.24-1.784.448-6.6 6.648-6.6 8.502 0 1.45.728 2.47 2 2.815 2.18.587 4.287-.456 5.78-2.86l.628-1 .001 1.373c.002 1.988-1.295 3.036-5.388 4.353-1.02.328-1.895.63-1.947.673-.2.155 1.74 2.864 2.04 2.864.17 0 1.166-.246 2.214-.547zm29.174-2.468c.486-.537.572-1.12.468-3.184-.113-2.244-.237-2.64-1.1-3.553-1.58-1.648-3.53-1.228-2.388.515.607.926 1.347.768 1.086-.232-.208-.796.18-.817.858-.046 1.27 1.447.95 3.453-.552 3.453-1.028 0-1.35-.44-2.02-2.78-.305-1.065-.677-1.937-.827-1.937-.497 0-.718.44-.4.8.168.202.633 1.656 1.033 3.23 1.008 3.963 2.415 5.32 3.862 3.72zm-19.153.063c.207-.14.302-.797.217-1.503-.138-1.14-.215-1.222-.83-.893-.885.473-1.835-.423-2.158-2.036-.245-1.223-.32-1.2 1.462-.47.223.092.792-.22 1.263-.7.862-.862 1.146-1.898.52-1.898a.338.338 0 00-.337.337c0 .485-.922.416-1.13-.084-.12-.292-.38-.188-.84.337-.366.417-.813.758-.993.758s-.424-.34-.54-.758c-.206-.73-.23-.735-.696-.127-.408.532-.4.702-.023 1.1.4.4 1.2 3.218 1.2 4.284 0 1.327 1.827 2.37 2.895 1.653zm6.143-1.76a4.4 4.4 0 00.952-4.813c-.54-1.3-1.474-1.772-2.793-1.44-.98.246-2.472 3.103-2.478 4.744-.008 2.557 2.423 3.407 4.32 1.5zM30.653 32a2.59 2.59 0 01-.663-1.6c.01-.842.05-.873.458-.337.503.662 1.396.777 1.74.223.125-.2.058-.535-.15-.74-.53-.53-.465-1.25.1-1.25.64 0 1.535 1.304 1.535 2.24 0 .7-1.4 2.14-2.066 2.14-.16 0-.595-.303-.965-.674zm9 1.937c1.398-1.522 1.262-3.867-.323-5.558-.818-.873-2.636-1.024-3.38-.28-.687.687-1.372 3.387-1.117 4.4.543 2.164 3.377 3 4.82 1.437zm-2.862-2.46c-.553-.387-.743-.85-.727-1.768.018-1.028.07-1.12.3-.533.35.863 1.08 1.2 1.722.767.398-.262.38-.385-.115-.764-.66-.505-.787-1.22-.22-1.22.508 0 2.325 1.987 2.325 2.543 0 .542-1.3 1.5-2.02 1.5-.288 0-.86-.236-1.272-.524zm19.8-1.5l3.537-1.327-3.8-.014c-3.4-.012-3.8.048-3.785.576.004.534.347 2.114.456 2.1a364.07 364.07 0 003.582-1.334zm-46.223-.238l.36-1.072-3.175-.107c-1.746-.06-3.175-.014-3.175.1.001.166 5.472 2.304 5.593 2.185.02-.02.197-.516.396-1.106zm21.773-3.323c.747.12 1.6.425 1.872.68.44.395.63.368 1.3-.184.437-.356 1.006-.647 1.263-.647s.468-.074.468-.165c0-.314-4.85-8.256-5.036-8.245-.217.013-5.2 8.347-5.342 8.955-.064.255.137.35.53.247.348-.1.83.07 1.07.36.4.47.548.432 1.473-.346.878-.74 1.243-.84 2.394-.655z"
      ></path>
      <path
        fill="#6398aa"
        d="M28.573 27.677c-.052-.024-.117-.08-.264-.228-.2-.2-.278-.26-.444-.328a1.17 1.17 0 00-.676-.069c-.198.04-.253.044-.342.027-.15-.03-.202-.12-.16-.273.053-.2.452-.932 1.252-2.32l4.05-6.598c.027-.024.028-.024.055 0 .144.13.988 1.43 2.14 3.302l2.857 4.904c0 .1-.137.143-.426.167-.36.03-.774.24-1.34.68-.27.2-.385.288-.516.35-.1.053-.12.055-.236.055s-.128-.003-.218-.048a1.697 1.697 0 01-.234-.163c-.227-.2-.5-.327-.946-.476a5.693 5.693 0 00-1.688-.318c-.408-.01-.595.026-.904.176-.252.123-.374.2-.95.682-.587.48-.796.58-1.007.48zM9.718 30.8c-1.06-.3-4.743-1.763-5.258-2.077-.07-.043-.077-.05-.057-.065.118-.086 1.286-.13 2.606-.096l3.705.122a67.04 67.04 0 01-.733 2.126c-.022.048-.068.046-.264-.01zm43.26.477c-.145-.283-.405-1.56-.413-2.023-.003-.18.02-.253.1-.327.185-.17.56-.232 1.594-.26l4.63-.004 1.2.008-2.868 1.075-4.192 1.562c-.014.004-.028-.007-.04-.03zm-38.106 14.61c0-.08.34-.68 1.204-2.123 2.07-3.455 3.015-4.707 4.177-5.528 1.04-.735 1.595-1.243 2.214-2.025l.382-.482.515.506c.9.886 1.445 1.143 2.428 1.148 1.203.006 2.52-.666 2.52-1.285 0-.14.1-.284.196-.284.04 0 .273.07.515.158.633.227 1.004.3 1.523.337a3.72 3.72 0 001.392-.168c.493-.147.776-.298 1.626-.864l.8-.518c.017 0 .326.18.687.398l.964.528a4.2 4.2 0 003.54-.1c.204-.098.685-.4 1.068-.647l.7-.456a27.85 27.85 0 01.323.66l.477.892a4.607 4.607 0 001.468 1.394c.634.4 1.025.905 1.065 1.408s-.178.94-.805 1.635c-.5.542-.612.754-.6 1.055s.177.65.487.96c.5.505 1.287.655 2.442.466.258-.042.583-.077.723-.077.447-.001.72.218 1.24.995.36.536 1.144 1.85 1.144 1.915 0 .034-.037.058-.1.058-.1 0-.586-.13-.93-.253l-7.8-3-7.247-2.765c-.846-.26-1.422-.322-1.9-.2-.582.15-8.517 3.217-13.146 5.08-2.286.92-2.572 1.03-3 1.147-.34.093-.328.092-.328.034z"
      ></path>
    </svg>
  );
}



type GroovySVGModifiedProps = {
  marginLeft?: number,
  marginTop?: number,
  
}
//Path 1: Outlines
//Path 2: Star Fill
export const GroovySVGModified = ({marginLeft, marginTop}: GroovySVGModifiedProps) => {

  const [toggle, setToggle] = useState<boolean>(false);

  //TODO: Figure out how to prevent animations on browser scaling
  //Pointer and Touch Event testing did not work as of yet

  return (
    <div style={{
      "width": "300px", 
      "height": "150px", 
      "display": "block", 
      "textAlign": "center",
       "margin": "auto",
       "position": "absolute",
       "marginTop": marginTop ? `${marginTop}px`: "10px",
       "marginLeft": marginLeft ? `${marginLeft}px` : "0px"}} onMouseOut={() => setToggle(false)}  onMouseOver={() => setToggle(true)}>
    <motion.svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" 
    initial={{scale: 2, fill: TrendyBlue}}
    animate={!toggle  ? {}: {
      scale: [2, 2.3, 2, 2.3, 2],
    }}
      transition={!toggle ? {} : {ease: "anticipate", repeat: Infinity, duration: 1.2}}
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <path
        fill="#333"
        d="M12.463 47.668c0-.084 1.13-1.94 2.5-4.126s2.362-4.025 2.182-4.088-.8.05-1.38.253c-1.745.608-2.104.447-3.407-1.532-1.4-2.142-1.46-2.363-.726-3.175.48-.53.45-.655-.337-1.443-.474-.474-.862-1.005-.862-1.18 0-.294-3.23-1.625-8.337-3.436C.947 28.53 0 28.125 0 28.04s2.446-.105 5.436-.044l5.436.1.53-.837c2.242-3.537 5.63-6.732 7.136-6.732.314 0 .95.3 1.415.665.757.595.86.964.995 3.532.083 1.577.253 2.97.377 3.095s.52-.04.88-.364c.46-.415.942-.528 1.623-.378.705.155 1.108.05 1.477-.4.554-.657 3.325-5.1 3.325-5.33 0-.078.55-1.017 1.22-2.086l1.717-2.74c.486-.778.562-.686 3.484 4.2 3.016 5.056 4.64 6.92 5.452 6.266.567-.457 3.544-.483 4.376-.038.473.253.773.25 1.034-.01.542-.542 1.84-.448 2.18.16.267.478.335.478.732 0 .24-.3.952-.527 1.582-.527.9 0 1.23.185 1.523.83l.378.83 5.846-.207L64 28.008c0 .1-2.387 1.05-5.305 2.135l-5.413 2.045c-.06.04.073 1 .293 2.1.574 2.916.2 4.86-1.243 6.456-.647.716-1.697 1.474-2.333 1.684s-1.157.457-1.157.55.68 1.217 1.5 2.5 1.384 2.333 1.232 2.333c-.25 0-6.302-2.34-15.716-6.072-1.856-.736-3.546-1.338-3.756-1.338-.4 0-3.77 1.28-13.677 5.184-5.745 2.264-5.97 2.342-5.97 2.073zm11.8-5.342L31 39.746c1.115-.397 1.488-.298 6.905 1.843l6.905 2.694c.648.237 1.985.753 2.97 1.145 1.123.448 1.697.556 1.54.3-1.76-2.977-1.814-3.026-3.033-2.798-1.47.276-2.385-.007-2.854-.884-.304-.57-.212-.847.548-1.64 1.13-1.18.953-2.266-.505-3.086-.56-.315-1.265-1.093-1.57-1.73l-.552-1.156-1.182.802c-1.453.986-3.226 1.037-4.706.135l-1.1-.665-1.267.86c-1.27.862-2.73.974-4.215.32-.4-.18-.6-.1-.6.228 0 .268-.386.663-.858.878-1.415.645-2.795.473-3.732-.463l-.853-.854-.7.876c-.38.482-1.256 1.234-1.95 1.67-.858.54-1.92 1.863-3.326 4.14-1.137 1.84-2.067 3.437-2.067 3.552s.872-.16 1.937-.608 4.438-1.788 7.495-2.975zM50.18 41.05c2.32-1.304 2.857-3.715 1.832-8.217-.857-3.762-1.285-4.994-1.792-5.16-.35-.114-.405.01-.207.48 1.284 3.05 1.355 4.58.233 5-.77.296-1.588-.812-2.23-3.023-.498-1.712-1.018-2.484-1.4-2.1-.094.094.07.638.366 1.2s.7 2.3.9 3.82.585 3.133.857 3.56c.706 1.113 1.83.845 2.556-.6.718-1.438.8-.48.1 1.192-.725 1.736-2.88 2.257-5.376 1.3-.4-.153-.535.005-.535.627 0 .458-.306 1.222-.68 1.697l-.68.865.933.158c1.6.272 3.818-.08 5.134-.82zm-33.4-2.87c4.842-1.392 5.707-3.015 4.1-7.7-.373-1.085-.68-2.252-.68-2.594 0-1.163-.585-.626-1.023.94-.58 2.07-2.323 3.83-3.788 3.823-1.272-.006-1.687-.238-2.212-1.236-.943-1.792.085-4.54 2.707-7.24 1.92-1.977 2.97-2.156 2.97-.507 0 2.572-1.773 6.357-2.707 5.78-.457-.282-.383-1.53.148-2.486.45-.814.36-2.054-.152-2.054-.593 0-1.766 2.16-1.92 3.534-.137 1.216-.05 1.512.528 1.822 2.03 1.087 4.7-2.23 4.825-6.015.07-1.988-.314-2.547-1.54-2.24-1.784.448-6.6 6.648-6.6 8.502 0 1.45.728 2.47 2 2.815 2.18.587 4.287-.456 5.78-2.86l.628-1 .001 1.373c.002 1.988-1.295 3.036-5.388 4.353-1.02.328-1.895.63-1.947.673-.2.155 1.74 2.864 2.04 2.864.17 0 1.166-.246 2.214-.547zm29.174-2.468c.486-.537.572-1.12.468-3.184-.113-2.244-.237-2.64-1.1-3.553-1.58-1.648-3.53-1.228-2.388.515.607.926 1.347.768 1.086-.232-.208-.796.18-.817.858-.046 1.27 1.447.95 3.453-.552 3.453-1.028 0-1.35-.44-2.02-2.78-.305-1.065-.677-1.937-.827-1.937-.497 0-.718.44-.4.8.168.202.633 1.656 1.033 3.23 1.008 3.963 2.415 5.32 3.862 3.72zm-19.153.063c.207-.14.302-.797.217-1.503-.138-1.14-.215-1.222-.83-.893-.885.473-1.835-.423-2.158-2.036-.245-1.223-.32-1.2 1.462-.47.223.092.792-.22 1.263-.7.862-.862 1.146-1.898.52-1.898a.338.338 0 00-.337.337c0 .485-.922.416-1.13-.084-.12-.292-.38-.188-.84.337-.366.417-.813.758-.993.758s-.424-.34-.54-.758c-.206-.73-.23-.735-.696-.127-.408.532-.4.702-.023 1.1.4.4 1.2 3.218 1.2 4.284 0 1.327 1.827 2.37 2.895 1.653zm6.143-1.76a4.4 4.4 0 00.952-4.813c-.54-1.3-1.474-1.772-2.793-1.44-.98.246-2.472 3.103-2.478 4.744-.008 2.557 2.423 3.407 4.32 1.5zM30.653 32a2.59 2.59 0 01-.663-1.6c.01-.842.05-.873.458-.337.503.662 1.396.777 1.74.223.125-.2.058-.535-.15-.74-.53-.53-.465-1.25.1-1.25.64 0 1.535 1.304 1.535 2.24 0 .7-1.4 2.14-2.066 2.14-.16 0-.595-.303-.965-.674zm9 1.937c1.398-1.522 1.262-3.867-.323-5.558-.818-.873-2.636-1.024-3.38-.28-.687.687-1.372 3.387-1.117 4.4.543 2.164 3.377 3 4.82 1.437zm-2.862-2.46c-.553-.387-.743-.85-.727-1.768.018-1.028.07-1.12.3-.533.35.863 1.08 1.2 1.722.767.398-.262.38-.385-.115-.764-.66-.505-.787-1.22-.22-1.22.508 0 2.325 1.987 2.325 2.543 0 .542-1.3 1.5-2.02 1.5-.288 0-.86-.236-1.272-.524zm19.8-1.5l3.537-1.327-3.8-.014c-3.4-.012-3.8.048-3.785.576.004.534.347 2.114.456 2.1a364.07 364.07 0 003.582-1.334zm-46.223-.238l.36-1.072-3.175-.107c-1.746-.06-3.175-.014-3.175.1.001.166 5.472 2.304 5.593 2.185.02-.02.197-.516.396-1.106zm21.773-3.323c.747.12 1.6.425 1.872.68.44.395.63.368 1.3-.184.437-.356 1.006-.647 1.263-.647s.468-.074.468-.165c0-.314-4.85-8.256-5.036-8.245-.217.013-5.2 8.347-5.342 8.955-.064.255.137.35.53.247.348-.1.83.07 1.07.36.4.47.548.432 1.473-.346.878-.74 1.243-.84 2.394-.655z"
      ></path>
      {/*Radial Gradient Components
        *f
      
      */}
      <motion.path 
        animate={!toggle ? {} : {fill: [TrendyBlue, TrendyPink, TrendyRed, TrendyGreen]}}
        transition={!toggle ? {} : {ease: "easeIn", repeat: Infinity, duration: 1}}
        d="M28.573 27.677c-.052-.024-.117-.08-.264-.228-.2-.2-.278-.26-.444-.328a1.17 1.17 0 00-.676-.069c-.198.04-.253.044-.342.027-.15-.03-.202-.12-.16-.273.053-.2.452-.932 1.252-2.32l4.05-6.598c.027-.024.028-.024.055 0 .144.13.988 1.43 2.14 3.302l2.857 4.904c0 .1-.137.143-.426.167-.36.03-.774.24-1.34.68-.27.2-.385.288-.516.35-.1.053-.12.055-.236.055s-.128-.003-.218-.048a1.697 1.697 0 01-.234-.163c-.227-.2-.5-.327-.946-.476a5.693 5.693 0 00-1.688-.318c-.408-.01-.595.026-.904.176-.252.123-.374.2-.95.682-.587.48-.796.58-1.007.48zM9.718 30.8c-1.06-.3-4.743-1.763-5.258-2.077-.07-.043-.077-.05-.057-.065.118-.086 1.286-.13 2.606-.096l3.705.122a67.04 67.04 0 01-.733 2.126c-.022.048-.068.046-.264-.01zm43.26.477c-.145-.283-.405-1.56-.413-2.023-.003-.18.02-.253.1-.327.185-.17.56-.232 1.594-.26l4.63-.004 1.2.008-2.868 1.075-4.192 1.562c-.014.004-.028-.007-.04-.03zm-38.106 14.61c0-.08.34-.68 1.204-2.123 2.07-3.455 3.015-4.707 4.177-5.528 1.04-.735 1.595-1.243 2.214-2.025l.382-.482.515.506c.9.886 1.445 1.143 2.428 1.148 1.203.006 2.52-.666 2.52-1.285 0-.14.1-.284.196-.284.04 0 .273.07.515.158.633.227 1.004.3 1.523.337a3.72 3.72 0 001.392-.168c.493-.147.776-.298 1.626-.864l.8-.518c.017 0 .326.18.687.398l.964.528a4.2 4.2 0 003.54-.1c.204-.098.685-.4 1.068-.647l.7-.456a27.85 27.85 0 01.323.66l.477.892a4.607 4.607 0 001.468 1.394c.634.4 1.025.905 1.065 1.408s-.178.94-.805 1.635c-.5.542-.612.754-.6 1.055s.177.65.487.96c.5.505 1.287.655 2.442.466.258-.042.583-.077.723-.077.447-.001.72.218 1.24.995.36.536 1.144 1.85 1.144 1.915 0 .034-.037.058-.1.058-.1 0-.586-.13-.93-.253l-7.8-3-7.247-2.765c-.846-.26-1.422-.322-1.9-.2-.582.15-8.517 3.217-13.146 5.08-2.286.92-2.572 1.03-3 1.147-.34.093-.328.092-.328.034z"
      ></motion.path>
    </motion.svg>
    </div>
  );

}
