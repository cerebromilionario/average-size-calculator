import AdsterraBanner300x250 from './AdsterraBanner300x250';
import AdsterraNativeBanner from './AdsterraNativeBanner';

type StrategicAdProps = {
  type?: 'native' | 'rectangle';
  className?: string;
};

export default function StrategicAd({ type = 'native', className = '' }: StrategicAdProps) {
  if (type === 'rectangle') return <div className={className}><AdsterraBanner300x250 /></div>;
  return <div className={className}><AdsterraNativeBanner /></div>;
}
