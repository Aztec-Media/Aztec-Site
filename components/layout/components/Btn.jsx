import Link from 'next/link';

import Arrow from '../../vectors/Arrow';

export default function Btn({ href, text }) {
  return (
    <Link href={href}>
      <a className='btn'>
        <span>{text}</span>
        <div className='arrow'>
          <Arrow />
        </div>
      </a>
    </Link>
  );
}
