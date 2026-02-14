import { Meal } from '@/app/lib/definitions';
import { capitaliseFirstLetter, formatTime } from '@/app/lib/utils';

const MEALTYPE_COLORS: Record<string, string> = {
  breakfast: 'bg-yellow-100',
  lunch: 'bg-green-100',
  dinner: 'bg-blue-100',
  snack: 'bg-purple-100'
};

const MEALTYPE_EMOJIS: Record<string, string> = {
  breakfast: '🥐',
  lunch: '🥗',
  dinner: '🍽️',
  snack: '🍎'
};

export default function MealCard({ id, type, time, foods }: Meal) {
  return (
    <div
      key={id}
      className="flex gap-2 w-full"
    >
      <div
        className={`border-black border p-4 rounded-lg ${MEALTYPE_COLORS[type]} w-full`}
      >
        <div className="flex gap-4">
          <span className="text-4xl flex items-center">
            {MEALTYPE_EMOJIS[type]}
          </span>
          <div>
            <h2 className="w-50 font-bold text-xl">
              {capitaliseFirstLetter(type)}
            </h2>
            <h3 className="font-semibold">{formatTime(time)}</h3>
          </div>
        </div>
        <ul className="mt-2.5 list-disc list-inside">
          {foods.map((food) => {
            return <li key={food.id}>{food.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
