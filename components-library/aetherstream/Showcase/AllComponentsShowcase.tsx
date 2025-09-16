import React from 'react';

// Import all the components
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import ButtonToggle from '../ButtonToggle/ButtonToggle';
import Card from '../Card/Card';
import Checkbox from '../Checkbox/Checkbox';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import InputField from '../InputField/InputField';
import MultiSelect from '../MultiSelect/MultiSelect';
import RadioButton from '../RadioButton/RadioButton';
import Select from '../Select/Select';
import Tabs from '../Tabs/Tabs';
import { ProgressTracker } from '../Custom/ProgressTracker';

// Container component for showcase sections
const ShowcaseSection: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className="bg-surface/50 rounded-sm border border-border p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-interactive-default mb-4 tracking-widest">{`// ${title}`}</h3>
        <div className={className || "flex flex-wrap gap-6 items-start"}>
            {children}
        </div>
    </div>
);


export const AllComponentsShowcase: React.FC = () => {
    // State for interactive components
    const [inputValue, setInputValue] = React.useState('user@aether.io');
    const [isChecked, setIsChecked] = React.useState(true);
    const [toggleValue, setToggleValue] = React.useState('Episodes');
    const [selectValue, setSelectValue] = React.useState('Season 1');
    const [multiSelectValues, setMultiSelectValues] = React.useState(['Cyberpunk']);
    const [radioValue, setRadioValue] = React.useState('1080p');
    const [activeTab, setActiveTab] = React.useState('Dashboard');

    return (
        <div className="space-y-8 p-4">
            <h1 className="text-4xl font-bold text-text-primary tracking-widest">AETHERSTREAM UI_KIT</h1>
            
            <Tabs
                tabs={['Dashboard', 'Forms & Inputs', 'Content Display']}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            {activeTab === 'Dashboard' && (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <ShowcaseSection title="Primary Actions">
                            <Button label="Initialize Stream" variant="primary" />
                            <Button label="System Check" variant="secondary" />
                            <Button label="Abort" variant="tertiary" />
                        </ShowcaseSection>
                         <ShowcaseSection title="User Profile">
                            <div className="flex items-center gap-6">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-text-primary">Cmdr_Val</h4>
                                    <p className="text-text-secondary">Profile Tier: Hyperion</p>
                                </div>
                            </div>
                        </ShowcaseSection>
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                         <ShowcaseSection title="Status Indicators">
                            <div className="flex flex-col gap-4">
                                <Badge label="Online" variant="positive" />
                                <Badge label="4K Available" variant="interactive" />
                                <Badge label="Connection Unstable" variant="warning" />
                            </div>
                        </ShowcaseSection>
                         <ShowcaseSection title="Continue Watching">
                            <ProgressTracker progress={62} title="Nexus Point" episode="01:14:32" />
                         </ShowcaseSection>
                    </div>
                </div>
            )}
            
            {activeTab === 'Forms & Inputs' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ShowcaseSection title="Text Inputs" className="space-y-6 w-full">
                        <InputField label="Enter Holo-tag" value={inputValue} onChange={setInputValue} />
                        <InputField label="Access Code" value="••••••••" onChange={() => {}} type="password"/>
                        <InputField label="System ID (Locked)" value="SYS-982-B" onChange={() => {}} disabled />
                    </ShowcaseSection>

                    <ShowcaseSection title="Selection Controls" className="space-y-6 w-full">
                        <Select
                            label="Select Sector"
                            options={['Sector Alpha', 'Sector Beta', 'Sector Gamma']}
                            value={selectValue}
                            onChange={setSelectValue}
                        />
                        <MultiSelect
                            placeholder="Select Genres..."
                            options={['Cyberpunk', 'Space Opera', 'AI Thriller']}
                            selectedOptions={multiSelectValues}
                            onChange={setMultiSelectValues}
                        />
                         <div className="flex flex-col gap-3 pt-4">
                            <Checkbox label="Enable High-Bandwidth Mode" checked={isChecked} onChange={setIsChecked} />
                            <RadioButton label="1080p Stream" name="stream" value="1080p" checked={radioValue === '1080p'} onChange={setRadioValue} />
                            <RadioButton label="4K Stream" name="stream" value="4k" checked={radioValue === '4k'} onChange={setRadioValue} />
                        </div>
                    </ShowcaseSection>
                </div>
            )}

            {activeTab === 'Content Display' && (
                 <div className="space-y-8">
                    <ShowcaseSection title="Content Card">
                        <Card imageUrl="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=800&auto=format&fit=crop" title="Cybernetic Dawn" subtitle="Season 1" />
                    </ShowcaseSection>
                     <ShowcaseSection title="Toggles & Panels" className="space-y-6 w-full">
                        <ButtonToggle options={['Episodes', 'Extras', 'Details']} value={toggleValue} onChange={setToggleValue} />
                        <ExpansionPanel title="View Technical Specs">
                            <p className="text-sm">STREAM_FORMAT: H.265, AUDIO_CODEC: Dolby Atmos 7.1, RESOLUTION: 3840x2160</p>
                        </ExpansionPanel>
                    </ShowcaseSection>
                </div>
            )}

        </div>
    );
};
