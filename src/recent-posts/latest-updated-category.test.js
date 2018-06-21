/**
 * External Dependencies
 */
import * as React                  from 'react';
import { shallow }                 from 'enzyme';

/**
 * Internal Dependencies
 */
import LatestUpdatedCategory from './latest-updated-category';

describe('latest-updated-category', () => {
  it('should render the latest updated category correctly', () => {
    const latestUpdatedCategory = {
      name: 'Life Style',
      slug: 'life-style',
      link: '',
      latestPublishedPosts: [
        {
          title: 'เอสเพรสโซวาไรตี้',
          slug: 'เอสเพรสโซวาไรตี้',
          link: '/2017/12/25/เอสเพรสโซวาไรตี้',
          status: 'PUBLISHED',
          html: `<p>คาวบอย ป๋าจูเนียร์พ่อค้า ล็อตธุรกรรมบัตเตอร์โยโย่ไลน์ บูติคสปิริต โปรเจ็คท์ เอ็นเตอร์เทน หล่อฮังก้วยเด้อเกรย์ ฮัลโลวีนทริป มหภาคเพียว บุญคุณดีพาร์ทเมนต์ถ่ายทำไพลิน แอคทีฟเยอร์บีร่า ศิลปากรวอล์กไลฟ์ ตะหงิดเวิร์ก...</p>`,
          author: { 
            displayName: 'Natcha Luangaroonchai', avatarUrl: 'https://www.gravatar.com/avatar/5b5def6d1c5d9654ace788c71d177473', link: '/users/natcha-luangaroonchai' 
          },
          createdAt: '2017-09-19T00:00:00.000Z',
          publishedAt: '2017-09-19T00:00:00.000Z',
          tags: [
            { name: 'Condimentum', slug: 'condimentum', link: '/tags/condimentum' },
          ],
          categories: [
            { name: 'Web Development', slug: 'web-development', link: '/categories/web-development-5a9a00cb6bcc2335131f9ca7' }
          ],
          comments: [
            {}, {}, {}, {}, {},
            {}, {}, {}, {}, {},
            {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}
          ]
        }
      ]
    }
    const wrapper = shallow(
      <LatestUpdatedCategory
        { ...latestUpdatedCategory }
      />
    );

    expect(wrapper.find('Header').first().prop('children')).toEqual(latestUpdatedCategory.name);
    expect(wrapper.find('Post')).toHaveLength(latestUpdatedCategory.latestPublishedPosts.length);
  });
});
