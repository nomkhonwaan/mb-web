/**
 * External Dependencies
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { ArchiveTitle, Button, Post } from '../components';

export const RecentPosts = (props) => {
  return (
    <div className="recent-posts _flex _flex-direction-column _flex-horizontal-align-center">

      <div className="_narrow">
        <ArchiveTitle>
          Recent Posts
        </ArchiveTitle>

        {
          props.recentPosts.map((item, key) => (
            <Post
              { ...item }
              key={ key }
            />
          ))
        }

        <div className="_flex">

          <Button className="older-posts-button _flex-right">
            <Link to="" className="_color-inherit _text-undecorated">
              Older Posts
            </Link>
          </Button>
          
        </div>

      </div>

      <div className="_wide">
        <ArchiveTitle>
          Web Development
        </ArchiveTitle>
      </div>
    
      <div className="_wide">
        <ArchiveTitle>
          Life Style
        </ArchiveTitle>
      </div>

    </div>
  );
};

export default connect(
  (state, ownProps) => {
    return {
      ...ownProps,
      recentPosts: [
        {
          title: 'ไบโอวิลเลจอุตสาหการ เกจิบาบูนดีไซน์ ต้าอ่วยเจ็ต แอปเปิลสติกเกอร์สเตอริโอมินต์มาร์ก',
          slug: '',
          link: '/2017/12/25/ไบโอวิลเลจอุตสาหการ-เกจิบาบูนดีไซน์-ต้าอ่วยเจ็ต-แอปเปิลสติกเกอร์สเตอริโอมินต์มาร์ก',
          status: 'PUBLISHED',
          html: `<p>แล็บ วอล์กเชฟเนิร์สเซอรี่ คันธาระ นายแบบเที่ยงวันโมเดิร์นเป็นไง เซ่นไหว้โปรเจ็กเตอร์ คำตอบตาปรือนายแบบโยโย่ นายพรานแบคโฮแบ็กโฮเพรสซ้อ คีตกวี รีพอร์ทไทม์ วัจนะปาสกาล เวสต์แคปมายองเนสแบด กีวีเวเฟอร์ฮาร์ด ตู้เซฟมาร์จินสัมนาภคันทลาพาธรีโมท สปิริตเฟรชชี่นายพรานเที่ยงคืน อีสต์ผลไม้ รอยัลตี้มัฟฟินบูติค</p><p>นายพรานสเปค กุนซือโบว์ลิ่งสไปเดอร์ ยนตรกรรมแคร็กเกอร์คอร์รัปชันเพทนาการ รีดไถ กู๋ไรเฟิลสเปก รีไซเคิลสต็อกโหลนติงต๊อง ดราม่า โครนาสเตริโอแจ๊ส มินท์หยวนแจ๊กพ็อต ทริป คันธาระอิ่มแปร้แอพพริคอทช็อต แทกติคคอรัปชันชีสอุปนายกรวมมิตร เปียโนเอ็นเตอร์เทน ซีอีโอไวกิ้งเซ็กส์ มายองเนสคอร์รัปชั่น แพลน</p>`,
          author: { 
            displayName: 'Natcha Luangaroonchai', avatarUrl: 'https://www.gravatar.com/avatar/5b5def6d1c5d9654ace788c71d177473', link: '/users/natcha-luangaroonchai' 
          },
          publishedAt: '2017-12-25T00:00:00.000Z',
          tags: [
            { name: 'Donec', slug: 'donec', link: '/tags/donec' },
            { name: 'Lorem', slug: 'lorem', link: '/tags/lorem' },
            { name: 'Curabitur', slug: 'curabitur', link: '/tags/curabitur' }
          ],
          categories: [
            { name: 'Web Design', slug: 'web-design', link: '/categories/web-design-5a9a00cb6bcc2335131f9ca7' }
          ],
          comments: [
            { },
            { },
            { },
            { }
          ]
        },
        {
          title: 'สะกอมสตรอว์เบอร์รี สหรัฐ มาร์ก โปรดักชั่น โปสเตอร์ติ่มซำ จูนหลวงปู่โมเดิร์น บาร์บีคิว',
          slug: '',
          link: '/2017/12/25/สะกอมสตรอว์เบอร์รี-สหรัฐ-มาร์ก-โปรดักชั่น-โปสเตอร์ติ่มซำ-จูนหลวงปู่โมเดิร์น-บาร์บีคิว',
          status: 'PUBLISHED',
          html: `<p><img src="https://placekitten.com/768/192" /></p><p>โรลออนบึมไคลแมกซ์เยอร์บีรา ราเม็งแอ๊บแบ๊วกรีนสเต็ปไฟลต์ จ๊าบยูวีเซี้ยว คอลัมน์ เท็กซ์โซลาร์ทอล์คไรเฟิล โคโยตี้ พอเพียงมยุราภิรมย์ยูโรอิออนรอยัลตี้ แก๊สโซฮอล์มะกันมลภาวะ ลอร์ด ก๊วนเป่ายิงฉุบเมคอัพป๋อหลอ รามาธิบดี รุสโซโปรเจคท์โอเลี้ยง โมจิ วีเจ โยเกิร์ตเทอร์โบโซลาร์ก๊วน ยังไงซาฟารี</p>`,
          author: { 
            displayName: 'Natcha Luangaroonchai', avatarUrl: 'https://www.gravatar.com/avatar/5b5def6d1c5d9654ace788c71d177473', link: '/users/natcha-luangaroonchai' 
          },
          publishedAt: '2017-12-25T00:00:00.000Z',
          tags: [
            { name: 'Praesent', slug: 'praesent', link: '/tags/praesent' },
            { name: 'Convallis', slug: 'convallis', link: '/tags/convallis' },
            { name: 'Aliquam', slug: 'aliquam', link: '/tags/aliquam' }
          ],
          categories: [
            { name: 'Web Design', slug: 'web-design', link: '/categories/web-design-5a9a00cb6bcc2335131f9ca7' }
          ],
          comments: [ ]
        },
        {
          title: 'เทวาคอร์ปอเรชั่นโฮลวีตไบโอตรวจสอบ',
          slug: '',
          link: '/2017/12/25/เทวาคอร์ปอเรชั่นโฮลวีตไบโอตรวจสอบ',
          status: 'PUBLISHED',
          html: `<p>ซาฟารีโอยัวะ อึ๋ม สตาร์แชมเปี้ยนจูน มาร์กสุริยยาตร์โบกี้ติ๋มอ่วม ดอกเตอร์ วอลนัทมายาคติเซ็กซ์ มอบตัว เรตติ้ง โอเลี้ยงอาร์ติสต์เสือโคร่งกีวีริคเตอร์ โปรโฮป คอร์รัปชั่นสจ๊วตเพรส จูนศิลปวัฒนธรรมทำงานฮิปโปแฟ้บ แดรี่ วีไอพี ศิลปวัฒนธรรมแบล็คตู้เซฟ ไพลินติ่มซำมิวสิค</p>`,
          author: { 
            displayName: 'Natcha Luangaroonchai', avatarUrl: 'https://www.gravatar.com/avatar/5b5def6d1c5d9654ace788c71d177473', link: '/users/natcha-luangaroonchai' 
          },
          publishedAt: '2017-12-25T00:00:00.000Z',
          tags: [
            { name: 'Lorem', slug: 'lorem', link: '/tags/lorem' },
            { name: 'Nullam', slug: 'nullam', link: '/tags/nullam' }
          ],
          categories: [
            { name: 'How I made this website', slug: 'how-i-made-this-website', link: '/categories/how-i-made-this-website-5a9a01226bcc2335131f9cab' }
          ],
          comments: [ ]
        },
        {
          title: 'ไบโอวิลเลจอุตสาหการ เกจิบาบูนดีไซน์ ต้าอ่วยเจ็ต แอปเปิลสติกเกอร์สเตอริโอมินต์มาร์ก',
          slug: '',
          link: '/2017/12/25/ไบโอวิลเลจอุตสาหการ-เกจิบาบูนดีไซน์-ต้าอ่วยเจ็ต-แอปเปิลสติกเกอร์สเตอริโอมินต์มาร์ก',
          status: 'PUBLISHED',
          html: `<p>แล็บ วอล์กเชฟเนิร์สเซอรี่ คันธาระ นายแบบเที่ยงวันโมเดิร์นเป็นไง เซ่นไหว้โปรเจ็กเตอร์ คำตอบตาปรือนายแบบโยโย่ นายพรานแบคโฮแบ็กโฮเพรสซ้อ คีตกวี รีพอร์ทไทม์ วัจนะปาสกาล เวสต์แคปมายองเนสแบด กีวีเวเฟอร์ฮาร์ด ตู้เซฟมาร์จินสัมนาภคันทลาพาธรีโมท สปิริตเฟรชชี่นายพรานเที่ยงคืน อีสต์ผลไม้ รอยัลตี้มัฟฟินบูติค</p><p>นายพรานสเปค กุนซือโบว์ลิ่งสไปเดอร์ ยนตรกรรมแคร็กเกอร์คอร์รัปชันเพทนาการ รีดไถ กู๋ไรเฟิลสเปก รีไซเคิลสต็อกโหลนติงต๊อง ดราม่า โครนาสเตริโอแจ๊ส มินท์หยวนแจ๊กพ็อต ทริป คันธาระอิ่มแปร้แอพพริคอทช็อต แทกติคคอรัปชันชีสอุปนายกรวมมิตร เปียโนเอ็นเตอร์เทน ซีอีโอไวกิ้งเซ็กส์ มายองเนสคอร์รัปชั่น แพลน</p>`,
          author: { 
            displayName: 'Natcha Luangaroonchai', avatarUrl: 'https://www.gravatar.com/avatar/5b5def6d1c5d9654ace788c71d177473', link: '/users/natcha-luangaroonchai' 
          },
          publishedAt: '2017-12-25T00:00:00.000Z',
          tags: [
            { name: 'Donec', slug: 'donec', link: '/tags/donec' },
            { name: 'Lorem', slug: 'lorem', link: '/tags/lorem' },
            { name: 'Curabitur', slug: 'curabitur', link: '/tags/curabitur' }
          ],
          categories: [
            { name: 'Web Design', slug: 'web-design', link: '/categories/web-design-5a9a00cb6bcc2335131f9ca7' }
          ],
          comments: [
            { },
            { },
            { },
            { }
          ]
        },
        {
          title: 'สะกอมสตรอว์เบอร์รี สหรัฐ มาร์ก โปรดักชั่น โปสเตอร์ติ่มซำ จูนหลวงปู่โมเดิร์น บาร์บีคิว',
          slug: '',
          link: '/2017/12/25/สะกอมสตรอว์เบอร์รี-สหรัฐ-มาร์ก-โปรดักชั่น-โปสเตอร์ติ่มซำ-จูนหลวงปู่โมเดิร์น-บาร์บีคิว',
          status: 'PUBLISHED',
          html: `<p><img src="https://placekitten.com/768/192" /></p><p>โรลออนบึมไคลแมกซ์เยอร์บีรา ราเม็งแอ๊บแบ๊วกรีนสเต็ปไฟลต์ จ๊าบยูวีเซี้ยว คอลัมน์ เท็กซ์โซลาร์ทอล์คไรเฟิล โคโยตี้ พอเพียงมยุราภิรมย์ยูโรอิออนรอยัลตี้ แก๊สโซฮอล์มะกันมลภาวะ ลอร์ด ก๊วนเป่ายิงฉุบเมคอัพป๋อหลอ รามาธิบดี รุสโซโปรเจคท์โอเลี้ยง โมจิ วีเจ โยเกิร์ตเทอร์โบโซลาร์ก๊วน ยังไงซาฟารี</p>`,
          author: { 
            displayName: 'Natcha Luangaroonchai', avatarUrl: 'https://www.gravatar.com/avatar/5b5def6d1c5d9654ace788c71d177473', link: '/users/natcha-luangaroonchai' 
          },
          publishedAt: '2017-12-25T00:00:00.000Z',
          tags: [
            { name: 'Praesent', slug: 'praesent', link: '/tags/praesent' },
            { name: 'Convallis', slug: 'convallis', link: '/tags/convallis' },
            { name: 'Aliquam', slug: 'aliquam', link: '/tags/aliquam' }
          ],
          categories: [
            { name: 'Web Design', slug: 'web-design', link: '/categories/web-design-5a9a00cb6bcc2335131f9ca7' }
          ],
          comments: [ ]
        }
      ],
      webDevelopment: {},
      lifeStyle: {}
    }
  }
)(RecentPosts);
