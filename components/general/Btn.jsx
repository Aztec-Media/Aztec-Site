import Link from 'next/link';

import Arrow from '../vectors/Arrow';

export default function Btn({ href, text, className }) {
  return (
    <Link href={href}>
      <a className={`btn ${className}`}>
        <span>{text}</span>
        <div className='arrow'>
          <Arrow />
        </div>
      </a>
    </Link>
  );
}
