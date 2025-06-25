import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import type { QuizResult } from '@shared/schema';

interface ResultCardProps {
  result: QuizResult;
}

export function ResultCard({ result }: ResultCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-12"
    >
      {/* Main Result */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 gradient-text">
          {t.resultTitle}
        </h1>
        
        <Card className="brand-card bg-gradient-to-br from-card to-card/80 shadow-2xl border-2 border-primary/20">
          <CardContent className="p-8">
            <div className="w-32 h-20 mx-auto mb-6 bg-muted rounded-xl overflow-hidden">
              <img 
                src={result.mainBrand.logo} 
                alt={result.mainBrand.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-4xl font-bold text-primary mb-4">
              {result.mainBrand.name}
            </h2>
            
            <p className="text-muted-foreground mb-6 text-lg">
              {result.mainBrand.description}
            </p>
            
            <div className="space-y-2">
              <div className="text-6xl font-bold gradient-text">
                {result.mainBrand.score}%
              </div>
              <Badge variant="secondary" className="text-sm">
                {t.match}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alternative Brands */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-center">
          {t.alternativeTitle}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {result.alternativeBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            >
              <Card className="brand-card shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-16 mx-auto mb-4 bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-2 text-center">
                    {brand.name}
                  </h4>
                  
                  <div className="text-2xl font-bold text-secondary mb-2 text-center">
                    {brand.score}%
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    {brand.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
