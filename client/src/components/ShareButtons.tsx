import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';
import { Copy, MessageCircle, Share2 } from 'lucide-react';
import { SiKakaotalk, SiLine, SiWhatsapp, SiWechat } from 'react-icons/si';

interface ShareButtonsProps {
  result: {
    mainBrand: {
      name: string;
      score: number;
    };
  };
}

export function ShareButtons({ result }: ShareButtonsProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSharing, setIsSharing] = useState(false);

  const shareText = `나는 ${result.mainBrand.name}와 ${result.mainBrand.score}% 일치! 패션 브랜드 매칭 테스트를 해보세요!`;
  const shareUrl = window.location.href;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        description: t.copied,
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareViaKakao = () => {
    if (typeof window !== 'undefined' && (window as any).Kakao) {
      (window as any).Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: 'Fashion Brand Matcher',
          description: shareText,
          imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      });
    } else {
      // Fallback to URL scheme
      window.open(`https://story.kakao.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`);
    }
  };

  const shareViaLine = () => {
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(lineUrl, '_blank');
  };

  const shareViaWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareViaWeChat = () => {
    // WeChat sharing is complex and typically requires their SDK
    // For now, we'll copy the link and show a message
    copyToClipboard();
    toast({
      description: "링크가 복사되었습니다. WeChat에서 공유해보세요!",
    });
  };

  const shareViaWebAPI = async () => {
    if (navigator.share) {
      try {
        setIsSharing(true);
        await navigator.share({
          title: 'Fashion Brand Matcher',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      } finally {
        setIsSharing(false);
      }
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center">
        {t.shareTitle}
      </h3>
      
      <div className="flex justify-center gap-3 flex-wrap">
        <Button
          onClick={shareViaKakao}
          className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-medium"
          size="sm"
        >
          <SiKakaotalk className="w-4 h-4 mr-2" />
          카카오톡
        </Button>
        
        <Button
          onClick={shareViaLine}
          className="bg-green-500 hover:bg-green-600 text-white font-medium"
          size="sm"
        >
          <SiLine className="w-4 h-4 mr-2" />
          LINE
        </Button>
        
        <Button
          onClick={shareViaWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white font-medium"
          size="sm"
        >
          <SiWhatsapp className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
        
        <Button
          onClick={shareViaWeChat}
          className="bg-green-400 hover:bg-green-500 text-white font-medium"
          size="sm"
        >
          <SiWechat className="w-4 h-4 mr-2" />
          WeChat
        </Button>
        
        <Button
          onClick={copyToClipboard}
          variant="outline"
          size="sm"
          className="font-medium"
        >
          <Copy className="w-4 h-4 mr-2" />
          {t.copyLink}
        </Button>
        
        {navigator.share && (
          <Button
            onClick={shareViaWebAPI}
            variant="outline"
            size="sm"
            disabled={isSharing}
            className="font-medium"
          >
            <Share2 className="w-4 h-4 mr-2" />
            공유하기
          </Button>
        )}
      </div>
    </div>
  );
}
