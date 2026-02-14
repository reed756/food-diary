import { MEALTYPE, TodaysMeals } from '@/app/lib/definitions';
import MealCard from '@/app/ui/dashboard/meal-card';

export default function Page() {
  const todaysMeals: TodaysMeals = {
    day_id: 0,
    date: new Date(),
    meals: [
      {
        id: 0,
        type: MEALTYPE.BREAKFAST,
        time: new Date(),
        foods: [
          {
            id: 0,
            name: 'Oatmeal'
          },
          {
            id: 1,
            name: 'Coffee'
          }
        ]
      },
      {
        id: 1,
        type: MEALTYPE.LUNCH,
        time: new Date(),
        foods: [
          {
            id: 0,
            name: 'Salad'
          },
          {
            id: 1,
            name: 'Chicken'
          },
          {
            id: 2,
            name: 'Rice'
          }
        ]
      },
      {
        id: 2,
        type: MEALTYPE.DINNER,
        time: new Date(),
        foods: [
          {
            id: 0,
            name: 'Steak'
          },
          {
            id: 1,
            name: 'Potatoes'
          }
        ]
      }
    ]
  };

  return (
    <div className="border-black border p-8 rounded-lg bg-grey-100 w-150 h-fit">
      <h1 className="text-2xl font-bold">Today&apos;s Meals</h1>
      <h2 className="font-medium">{todaysMeals.date.toDateString()}</h2>
      <div className="mt-8 flex flex-col gap-8">
        {todaysMeals.meals.map((meal) => {
          return (
            <div
              key={meal.id}
              className="flex gap-2"
            >
              <MealCard {...meal}></MealCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
