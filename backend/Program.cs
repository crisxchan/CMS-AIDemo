using API.Data;
using API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Add the repository as scoped
builder.Services.AddScoped<IContactService, JsonContactService>();

// Add the JsonContactservice as scoped
builder.Services.AddScoped<JsonRepository>();

// Add the automapper package
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// frontend react => localhost:3000
// add a CORS policy that accepts requests from localhost:3000
app.UseCors(builder => builder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod());

app.UseAuthorization();

app.MapControllers();

app.Run();
