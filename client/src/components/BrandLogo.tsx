import { useState } from 'react';

interface BrandLogoProps {
  brandId: string;
  brandName: string;
  className?: string;
}

export function BrandLogo({ brandId, brandName, className = "" }: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  // 지원하는 이미지 확장자들
  const extensions = ['png', 'jpg', 'jpeg', 'svg', 'webp'];
  const [currentExtIndex, setCurrentExtIndex] = useState(0);

  const handleImageError = () => {
    if (currentExtIndex < extensions.length - 1) {
      // 다음 확장자 시도
      setCurrentExtIndex(prev => prev + 1);
      setLoading(true);
    } else {
      // 모든 확장자 시도 완료, 폴백 표시
      setImageError(true);
      setLoading(false);
    }
  };

  const handleImageLoad = () => {
    setLoading(false);
    setImageError(false);
  };

  const logoPath = `/logos/${brandId}.${extensions[currentExtIndex]}`;

  if (imageError) {
    // 이미지가 없을 때 브랜드명 표시
    return (
      <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 ${className}`}>
        <div className="text-center p-4">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {brandName}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            로고 이미지 없음
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="animate-spin w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
        </div>
      )}
      <img
        src={logoPath}
        alt={`${brandName} 로고`}
        className={`w-full h-full object-contain rounded-lg ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
}