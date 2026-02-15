import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { TeamSection as TeamSectionType } from '@/types/sections';
import type { TeamMember } from '@/types/sanity';
import { urlForImage } from '@/sanity/image';

interface TeamSectionProps extends Partial<TeamSectionType> {
  teamMembers?: TeamMember[];
  staticData?: {
    label: string;
    title: string;
    members: Array<{
      name: string;
      role: string;
      img: string;
    }>;
  };
}

export function TeamSection({
  label,
  title,
  teamMembers,
  staticData,
}: TeamSectionProps) {
  const displayLabel = label || staticData?.label || 'OUR TEAM';
  const displayTitle = title || staticData?.title || 'Our key people';

  const defaultMembers = [
    { name: 'Arjun Randhawa', role: 'Founder & CEO', img: '/images/about/team/team-member-1.png' },
    { name: 'Sameer S.', role: 'CTO & Senior Developer', img: '/images/about/team/team-member-2.png' },
    { name: 'Amit K.', role: 'Operations Head', img: '/images/about/team/team-member-3.png' },
  ];

  const displayMembers = teamMembers?.map((m) => ({
    name: m.name,
    role: m.role,
    img: urlForImage(m.image)?.width(400).height(500).url() || '',
  })) || staticData?.members || defaultMembers;

  return (
    <section className="section bg-cream">
      <div className="container">
        <SectionHeader label={displayLabel} title={displayTitle} />
        <div className="team-grid">
          {displayMembers.map((member, i) => (
            <div key={i} className="team-card">
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={500}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <div className="team-info">
                <p className="team-name">{member.name}</p>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
