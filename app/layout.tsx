import RootLayout from '@/component/layouts/root-layout';
import '../component/ui/global.css'

export default function layout({children,}: {children: React.ReactNode}) {
  return (
    <RootLayout>
      {children }
    </RootLayout>
  );
}
