import { Heart } from 'lucide-react';

export function CalendarSection() {
  const months = [
    {
      name: 'Janvier',
      days: 31,
      startDay: 4,
      maraudeDates: [17, 31]
    },
    {
      name: 'Février',
      days: 28,
      startDay: 7,
      maraudeDates: [14, 28]
    },
    {
      name: 'Mars',
      days: 31,
      startDay: 7,
      maraudeDates: [14, 28]
    }
  ];

  const weekDays = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  const generateCalendarDays = (month: { days: number; startDay: number; maraudeDates: number[] }) => {
    const days = [];
    
    // Add empty cells for days before the month starts
    for (let i = 0; i < month.startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }
    
    // Add actual days of the month
    for (let day = 1; day <= month.days; day++) {
      const isMaraudeDay = month.maraudeDates.includes(day);
      days.push(
        <div
          key={day}
          className={`h-12 flex items-center justify-center rounded-lg transition-all ${
            isMaraudeDay 
              ? 'bg-linear-to-br from-red-500 to-pink-500 shadow-lg scale-110' 
              : 'hover:bg-gray-50'
          }`}
        >
          {isMaraudeDay ? (
            <Heart className="text-white fill-white animate-pulse" size={20} />
          ) : (
            <span className="text-sm font-medium text-gray-700">{day}</span>
          )}
        </div>
      );
    }
    
    return days;
  };

  return (
    <section className="py-20 bg-linear-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0A1647] mb-3">
            LES DATES DES MARAUDES
          </h2>
          <div className="w-32 h-1 bg-[#F4E04D] mx-auto mb-4"></div>
          <p className="text-gray-600">
            Rejoignez-nous pour nos actions caritatives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {months.map((month, index) => (
            <div
              key={month.name}
              className="bg-white rounded-2xl shadow-xl border-2 border-[#0A1647] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Month Header */}
              <div className="bg-linear-to-r from-[#0A1647] to-[#1a2857] text-[#F4E04D] py-5 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
                <h3 className="text-2xl font-bold relative z-10">{month.name}</h3>
              </div>

              {/* Calendar Grid */}
              <div className="p-6">
                {/* Week Days Header */}
                <div className="grid grid-cols-7 gap-1 mb-3">
                  {weekDays.map((day, idx) => (
                    <div
                      key={`${day}-${idx}`}
                      className="text-center font-bold text-sm text-[#0A1647] py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {generateCalendarDays(month)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-3 mt-12 bg-white rounded-full px-6 py-3 shadow-md w-fit mx-auto border-2 border-[#F4E04D]">
          <Heart className="text-red-500 fill-red-500" size={24} />
          <span className="text-gray-700 font-semibold text-lg">
            Jours de maraude
          </span>
        </div>
      </div>
    </section>
  );
}