/**
 * External Dependencies
 */
import * as React  from 'react';
import { shallow } from 'enzyme';

/**
 * Internal Dependencies
 */
import Post        from './post';

describe('post', () => {

  describe('render a Post on the recent-posts page', () => {
    it('should render a medium version of Post component', () => {
      const publishedPost = {
        title: 'ไบโอวิลเลจอุตสาหการ เกจิบาบูนดีไซน์ ต้าอ่วยเจ็ต แอปเปิลสติกเกอร์สเตอริโอมินต์มาร์ก',
        slug: '',
        link: '/2017/12/25/ไบโอวิลเลจอุตสาหการ-เกจิบาบูนดีไซน์-ต้าอ่วยเจ็ต-แอปเปิลสติกเกอร์สเตอริโอมินต์มาร์ก',
        status: 'PUBLISHED',
        html: `<p>แล็บ วอล์กเชฟเนิร์สเซอรี่ คันธาระ นายแบบเที่ยงวันโมเดิร์นเป็นไง เซ่นไหว้โปรเจ็กเตอร์ คำตอบตาปรือนายแบบโยโย่ นายพรานแบคโฮแบ็กโฮเพรสซ้อ คีตกวี รีพอร์ทไทม์ วัจนะปาสกาล เวสต์แคปมายองเนสแบด กีวีเวเฟอร์ฮาร์ด ตู้เซฟมาร์จินสัมนาภคันทลาพาธรีโมท สปิริตเฟรชชี่นายพรานเที่ยงคืน อีสต์ผลไม้ รอยัลตี้มัฟฟินบูติค</p><p>นายพรานสเปค กุนซือโบว์ลิ่งสไปเดอร์ ยนตรกรรมแคร็กเกอร์คอร์รัปชันเพทนาการ รีดไถ กู๋ไรเฟิลสเปก รีไซเคิลสต็อกโหลนติงต๊อง ดราม่า โครนาสเตริโอแจ๊ส มินท์หยวนแจ๊กพ็อต ทริป คันธาระอิ่มแปร้แอพพริคอทช็อต แทกติคคอรัปชันชีสอุปนายกรวมมิตร เปียโนเอ็นเตอร์เทน ซีอีโอไวกิ้งเซ็กส์ มายองเนสคอร์รัปชั่น แพลน</p>`,
        author: { 
          displayName: 'Natcha Luangaroonchai', avatarUrl: 'https://www.gravatar.com/avatar/5b5def6d1c5d9654ace788c71d177473', link: '/users/natcha-luangaroonchai' 
        },
        createdAt: '2017-12-25T00:00:00.000Z',
        publishedAt: '2017-12-25T00:00:00.000Z',
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
      };

      const wrapper = shallow(
        <Post { ...publishedPost } size="medium" />
      );

      expect(wrapper.find('h2').text()).toEqual(publishedPost.title);
      expect(wrapper.find('Link').at(0).prop('to')).toEqual(publishedPost.link);
      expect(wrapper.find('.header')).toHaveLength(1);

      publishedPost.tags.forEach((val, key) => {
        const link = wrapper.find('.post-tag').at(key).find('Link');
        
        expect(link.prop('children').join('')).toEqual(`#${val.name}`);
        expect(link.prop('to')).toEqual(val.link);
      });

      expect(wrapper.find('.post-article').prop('dangerouslySetInnerHTML')['__html']).toEqual(publishedPost.html);
      expect(wrapper.find('.footer')).toHaveLength(1);
      
      const postAuthorAvatar = wrapper.find('.post-author-avatar');
      expect(postAuthorAvatar.find('Link').prop('to')).toEqual(publishedPost.author.link);
      expect(postAuthorAvatar.find('Link > img').prop('src')).toEqual(publishedPost.author.avatarUrl);
      expect(postAuthorAvatar.find('Link > img').prop('alt')).toEqual(publishedPost.author.displayName);

      const postAuthorDisplayName = wrapper.find('.post-author-display-name');
      expect(postAuthorDisplayName.find('Link').prop('to')).toEqual(publishedPost.author.link);
      expect(postAuthorDisplayName.find('Link').prop('children')).toEqual(publishedPost.author.displayName);

      expect(wrapper.find('.post-published-at').prop('children')).toEqual('December 25, 2017');

      publishedPost.categories.forEach((val, key) => {
        const link = wrapper.find('.post-categories > Link');

        expect(link.prop('children')).toEqual(val.name);
        expect(link.prop('to')).toEqual(val.link);
      });

      expect(wrapper.find('.comment')).toHaveLength(0);
    });
  });

});
