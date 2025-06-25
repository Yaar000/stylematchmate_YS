import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage, type Language } from '@/hooks/useLanguage';

const languageOptions = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' },
  { value: 'ja', label: '日本語' },
  { value: 'zh', label: '中文' }
];

export function LanguageSelector() {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <Select value={currentLanguage} onValueChange={(value: Language) => changeLanguage(value)}>
      <SelectTrigger className="w-24 h-8 text-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languageOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
