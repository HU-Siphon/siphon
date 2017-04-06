export default {
  links: [
    {
      title: 'Navigation',
      icon: 'fa-compass',
      links: [
        {
          name: 'Dashboard',
          link: '/',
          type: 'ROUTER'
        },
        {
          name: 'Content',
          link: '/content',
          type: 'ROUTER'
        },
        {
          name: 'Settings',
          link: '/settings',
          type: 'ROUTER'
        }
      ]
    },
    {
      title: 'Personal',
      icon: 'fa-user',
      links: [
        {
          name: 'Chapel',
          link: 'https://pipeline.harding.edu/block/592',
          type: 'CONTENT'
        },
        {
          name: 'Housing',
          link: 'https://pipeline.harding.edu/block/66',
          type: 'CONTENT'
        }
      ]
    },
    {
      title: 'Student',
      icon: 'fa-graduation-cap',
      links: [
        {
          name: 'Enrolled classes',
          link: 'https://ssb.pipeline.harding.edu/hrdg/bwskfshd.P_CrseSchdDetl',
          type: 'CONTENT'
        },
        {
          name: 'Canvas',
          link: 'https://harding.instructure.com/',
          type: 'EXTERNAL'
        },
        {
          name: 'EASEL',
          link: 'https://cs.harding.edu/easel/cgi-bin/index',
          type: 'EXTERNAL'
        }
      ]
    },
    {
      title: 'Registration',
      icon: 'fa-check',
      links: [
        {
          name: 'Schedule planner',
          link: 'https://hardingu.collegescheduler.com/',
          type: 'CONTENT'
        },
        {
          name: 'Schedule planner cart',
          link: 'https://ssb.pipeline.harding.edu/hrdg/csched.p_regs_ssb',
          type: 'CONTENT'
        },
        {
          name: 'Chapel seat selection',
          link: 'https://ssb.pipeline.harding.edu/hrdg/szpseat.P_PickSeat',
          type: 'CONTENT'
        },
        {
          name: 'Purchase textbooks',
          link: 'https://pipeline.harding.edu/block/386',
          type: 'CONTENT'
        }
      ]
    },
    {
      title: 'Finance',
      icon: 'fa-money',
      links: [
        {
          name: 'Account Summary',
          link: 'https://pipeline.harding.edu/block/75',
          type: 'CONTENT'
        }
      ]
    }
  ]
}
