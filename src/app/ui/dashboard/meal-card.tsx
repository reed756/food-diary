import { Meal } from '@/app/lib/definitions';
import { capitaliseFirstLetter, formatTime } from '@/app/lib/utils';

export default function MealCard({ id, type, time, foods }: Meal) {
  return (
    <div
      key={id}
      className="flex gap-2"
    >
      <div className="border-black border p-4 rounded-lg bg-yellow-100 w-full">
        <h2 className="w-50">
          {capitaliseFirstLetter(type)} - {formatTime(time)}:
        </h2>
        <ul>
          {foods.map((food) => {
            return <li key={food.id}>{food.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
