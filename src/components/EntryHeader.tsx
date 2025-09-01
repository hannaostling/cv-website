"use client";

type Props = {
  first: string;
  second: string;
  third: string;
  image: string;
};

export function EntryHeader({ first, second, third, image }: Props) {
  return (
    <div>
      <div className="entry-row">
        <img src={image} alt="" aria-hidden="true" className="entry-img" />
        <div>
          <h3>{first}</h3>
          <p className="entry-second">{second}</p>
          <p className="entry-third">{third}</p>
        </div>
      </div>
    </div>
  );
}
