/**
 * External Dependencies
 */
import * as React      from 'react';
import { shallow }     from 'enzyme';

/**
 * Internal Dependencies
 */
import { RecentPosts } from './recent-posts';

describe('recent-posts', () => {

  describe('latest-published-posts', () => {
    it('should render the latest published posts correctly', () => {
      const latestPublishedPosts = [
        {
          title: 'ไบโอวิลเลจอุตสาหการ เกจิบาบูนดีไซน์ ต้าอ่วยเจ็ต แอปเปิลสติกเกอร์สเตอริโอมินต์มาร์ก',
          slug: '',
          link: '/2017/12/25/ไบโอวิลเลจอุตสาหการ-เกจิบาบูนดีไซน์-ต้าอ่วยเจ็ต-แอปเปิลสติกเกอร์สเตอริโอมินต์มาร์ก',
          status: 'PUBLISHED',
          html: `<p>แล็บ วอล์กเชฟเนิร์สเซอรี่ คันธาระ นายแบบเที่ยงวันโมเดิร์นเป็นไง เซ่นไหว้โปรเจ็กเตอร์ คำตอบตาปรือนายแบบโยโย่ นายพรานแบคโฮแบ็กโฮเพรสซ้อ คีตกวี รีพอร์ทไทม์ วัจนะปาสกาล เวสต์แคปมายองเนสแบด กีวีเวเฟอร์ฮาร์ด ตู้เซฟมาร์จินสัมนาภคันทลาพาธรีโมท สปิริตเฟรชชี่นายพรานเที่ยงคืน อีสต์ผลไม้ รอยัลตี้มัฟฟินบูติค</p><p>นายพรานสเปค กุนซือโบว์ลิ่งสไปเดอร์ ยนตรกรรมแคร็กเกอร์คอร์รัปชันเพทนาการ รีดไถ กู๋ไรเฟิลสเปก รีไซเคิลสต็อกโหลนติงต๊อง ดราม่า โครนาสเตริโอแจ๊ส มินท์หยวนแจ๊กพ็อต ทริป คันธาระอิ่มแปร้แอพพริคอทช็อต แทกติคคอรัปชันชีสอุปนายกรวมมิตร เปียโนเอ็นเตอร์เทน ซีอีโอไวกิ้งเซ็กส์ มายองเนสคอร์รัปชั่น แพลน</p>`,
          author: { 
            displayName: 'Natcha Luangaroonchai', avatarUrl: 'https://www.gravatar.com/avatar/5b5def6d1c5d9654ace788c71d177473', link: '/users/natcha-luangaroonchai' 
          },
          createdAt: '2017-12-25T00:00:00.000Z',
          publishedAt: '',
          updatedAt: '',
          tags: [
            { name: 'Donec', slug: 'donec', link: '/tags/donec' },
            { name: 'Lorem', slug: 'lorem', link: '/tags/lorem' },
            { name: 'Curabitur', slug: 'curabitur', link: '/tags/curabitur' }
          ],
          categories: [
            { name: 'Web Design', slug: 'web-design', link: '/categories/web-design-5a9a00cb6bcc2335131f9ca7' }
          ],
          comments: []
        }
      ];
      const wrapper = shallow(
        <RecentPosts
          latestPublishedPosts={ latestPublishedPosts }
          latestUpdatedCategories={ [] }
        />
      );

      expect(wrapper.find('Post')).toHaveLength(latestPublishedPosts.length);
      expect(wrapper.find('ArchiveTitle').first().prop('children')).toEqual('Recent Posts');
      expect(wrapper.find('.older-posts-button')).toHaveLength(1);
      expect(wrapper.find('LatestUpdatedCategory')).toHaveLength(0);
    });
  });

});
