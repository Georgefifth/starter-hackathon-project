import React, { useState } from 'react';
import { RESOURCES_305, VeteranResource305 } from '../data/resources305';
import { copyToClipboard } from '../utils/clipboard';
import { MapPin, Phone, Globe, Shield, Search, ExternalLink, HeartPulse, Building2, GraduationCap, AlertOctagon } from 'lucide-react';

interface Props {
  onNotify: (msg: string) => void;
}

export const ResourceHub305: React.FC<Props> = ({ onNotify }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const categories = [
    { label: 'All Resources', value: 'All' },
    { label: 'FIU Student Veterans', value: 'FIU Student Veterans', icon: GraduationCap },
    { label: 'VA Healthcare', value: 'VA Healthcare', icon: HeartPulse },
    { label: 'VSO Claims Assistance', value: 'VSO & Claims Assistance', icon: Building2 },
    { label: 'Emergency & Crisis', value: 'Crisis & Emergency Relief', icon: AlertOctagon },
  ];

  const filteredResources = RESOURCES_305.filter(res => {
    const categoryMatch = selectedCategory === 'All' || res.category === selectedCategory;
    const queryMatch = searchFilter === '' ||
      res.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      res.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      res.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
      res.freeServices.some(s => s.toLowerCase().includes(searchFilter.toLowerCase()));
    return categoryMatch && queryMatch;
  });

  const handleCopyContact = async (res: VeteranResource305) => {
    await copyToClipboard(`${res.name}\nPhone: ${res.phone}\nAddress: ${res.location}\nWeb: ${res.website}`);
    onNotify(`Copied ${res.name} contact info!`);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-command-800 border border-slate-700/80 rounded-lg p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-mono font-semibold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">
                SOUTH FLORIDA & FIU VETERAN DIRECTORY
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Direct verified hotlines & free accredited advocacy
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-100 mt-1">
              305 Area Veteran Emergency & Support Network
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Connect with accredited Miami-Dade Veterans Service Officers, the Bruce W. Carter VA Medical Center, FIU Veteran & Military Affairs (MMC Campus), and rapid emergency re-housing networks.
            </p>
          </div>
          <div className="p-3 bg-red-950/40 border border-red-500/50 rounded-lg flex items-center gap-3">
            <div className="p-2 bg-red-500/20 text-red-400 rounded-md">
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-red-300">VETERANS CRISIS LINE (24/7)</div>
              <a href="tel:988" className="text-sm font-bold text-white hover:underline">
                Dial 988, Press 1 or Text 838255
              </a>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-5 pt-4 border-t border-slate-700/60 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat.value
                    ? 'bg-amber-500 text-black font-semibold shadow'
                    : 'bg-command-900/90 text-slate-300 hover:bg-command-700 border border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchFilter}
              onChange={e => setSearchFilter(e.target.value)}
              placeholder="Search 305 resources..."
              className="w-full bg-command-900/90 border border-slate-700 rounded text-sm pl-9 pr-3 py-1.5 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Directory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredResources.length === 0 ? (
          <div className="col-span-2 p-8 text-center bg-command-800 border border-slate-700 rounded-lg text-slate-400">
            No 305 veteran resources match your current filter criteria.
          </div>
        ) : (
          filteredResources.map(res => (
            <div
              key={res.id}
              className="bg-command-800 border border-slate-700/80 rounded-lg p-5 hover:border-slate-500 transition flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-command-900 text-amber-400 border border-slate-700">
                    {res.category}
                  </span>
                  <button
                    onClick={() => handleCopyContact(res)}
                    className="text-xs text-slate-400 hover:text-amber-400 font-mono transition"
                    title="Copy full contact"
                  >
                    [Copy Contact]
                  </button>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mt-2">
                  {res.name}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {res.description}
                </p>

                {/* Free Services List */}
                <div className="mt-3 pt-3 border-t border-slate-700/60">
                  <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase mb-1.5 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    100% Free Veteran Services:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {res.freeServices.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="pt-3 border-t border-slate-700 space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{res.location}</span>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                  <a
                    href={`tel:${res.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-command-700 hover:bg-command-600 text-xs font-semibold text-slate-100 border border-slate-600 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    {res.phone}
                  </a>

                  <a
                    href={res.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-500/10 hover:bg-amber-500/20 text-xs font-semibold text-amber-400 border border-amber-500/30 transition"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Official Portal
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
