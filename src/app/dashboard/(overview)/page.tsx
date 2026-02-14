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
    ],
    discomfort_notes: 'Felt bloated after lunch.',
    discomfort_level: 3
  };

  return (
    <div className="border-black border p-8 rounded-lg bg-grey-100 w-150 h-fit">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Today&apos;s Meals</h1>
          <h2 className="font-medium">{todaysMeals.date.toDateString()}</h2>
        </div>
        <button
          className="bg-green-500 border-0 rounded-lg text-white px-3.75 py-4 align-middle decoration-0 inline-block text-lg cursor-pointer hover:bg-green-800 transition-colors duration-200 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-100"
          type="submit"
        >
          Log a Meal
        </button>
      </div>
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
        <section className="border-black border p-4 rounded-lg bg-gray-100 w-full">
          <h2 className="w-50 font-bold text-xl">Discomfort</h2>
          <ul className="mt-2.5 list-disc list-inside">
            <li>Discomfort Level: {todaysMeals.discomfort_level}/10</li>
            <li>Discomfort Notes: {todaysMeals.discomfort_notes}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
