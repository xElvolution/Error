import { useMemo } from 'react'
import { Box, SubMenuItems, DropdownMenuItemType } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'

const QuestProgramLayout = ({ children }) => {
  const { t } = useTranslation()
  const { pathname } = useRouter()

  const subMenuItems = useMemo(() => {
    const menu = [
      {
        label: t('Overview'),
        href: '/quest-program',
      },
      {
        label: t('Quest'),
        href: '/quest-program/quest',
      },
      {
        label: t('Membership NFT'),
        href: '/quest-program/membership',
      },
      {
        label: t('Founders NFT'),
        href: '/quest-program/founders', 
      },
    ];

    return menu;
  }, [t]);

  const activeSubItem = useMemo(
    () => subMenuItems.find((subMenuItem) => subMenuItem.href === pathname)?.href,
    [subMenuItems, pathname],
  );

  return (
    <Box>
      <SubMenuItems items={subMenuItems} activeItem={activeSubItem} />
      {children}
    </Box>
  );
};

export default QuestProgramLayout;
